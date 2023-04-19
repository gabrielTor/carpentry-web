import useForm from '../../hooks/useForm'
import styles from '../../styles/Contact.module.css'
import { useRef } from 'react'

interface Props {
    fieldsets: {
        name: string
        required: boolean
    }[]
    btnTitle: string
    fn: () => Promise<void>
}

export default function Form({ fieldsets, btnTitle, fn }: Props) {
    const form = useRef<HTMLFormElement>(null)
    const { handleChange, handleSubmit } = useForm(fn, form)

    return (
        <form ref={form} className={styles.formContainer} onSubmit={handleSubmit}>
            {
                fieldsets.map(({ name, required }) => (
                    <fieldset key={name}>
                        <label>{name} {required && <p>*</p>}</label>
                        {name === 'mensaje' ?
                            <textarea name={name}
                                onChange={handleChange}
                                required={required}>
                            </textarea> :
                            <input name={name}
                                type="text"
                                autoComplete='off'
                                required={required}
                                onChange={handleChange} />}
                    </fieldset>
                ))
            }
            <button type="submit" className="button">{btnTitle}</button>
        </form>
    )
}