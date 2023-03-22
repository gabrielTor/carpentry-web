import { useState, ChangeEvent, FormEvent, useCallback, RefObject } from "react"

const useForm = <T,>(onSubmit: (values?: T) => Promise<void>, formRef?: RefObject<HTMLFormElement>, initialValue?: T) => {
    const [values, setValues] = useState<T>(initialValue || {} as T)

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setValues(prev => ({ ...prev, [name]: value }))
    }, [])

    const validateValues = (rules: string[]): boolean => {
        const notEmptyValues = rules.every(key => values[key as keyof T] !== "")
        return notEmptyValues
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(values)
            .catch(err => console.error(err))
            .finally(() => {
                setValues({} as T)
                formRef?.current?.reset()
            })
    }

    return { values, validateValues, handleChange, handleSubmit }
}

export default useForm;