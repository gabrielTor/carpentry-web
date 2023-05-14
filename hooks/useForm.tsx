import { useState, ChangeEvent, FormEvent, useCallback, RefObject } from "react"

const useForm = <T,>(onSubmit: (values?: T) => Promise<void>, formRef?: RefObject<HTMLFormElement>, initialValue?: T) => {
    const [values, setValues] = useState<T>(initialValue || {} as T)
    const [toastMessage, setToastMessage] = useState<string | null>(null)

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
        setToastMessage('Hemos recibido su correo. Le responderemos tan pronto como sea posible. Gracias por ponerse en contacto con nosotros')
        onSubmit(values)
            .catch(err => console.error(err))
            .finally(() => {
                setValues({} as T)
                formRef?.current?.reset()
                setTimeout(()=>setToastMessage(null), 10000)
            })
    }

    return { values, validateValues, handleChange, handleSubmit, toastMessage }
}

export default useForm;