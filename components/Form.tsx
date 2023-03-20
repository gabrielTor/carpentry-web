import styles from '../styles/Contact.module.css'

interface Props {
    fieldsets: {
        name: string
        required: boolean
    }[]
    btnTitle: string
}

export default function Form({ fieldsets, btnTitle }: Props) {
    return (
        <form className={styles.formContainer}>
            {
                fieldsets.map(({ name, required }) => (
                    <fieldset key={name}>
                        <label>{name} {required && <p>*</p>}</label>
                        {name === 'Mensaje' ?
                            <textarea required={required}></textarea> :
                            <input type="text" required={required} />}
                    </fieldset>
                ))
            }
            <button type="submit" className="button">{btnTitle}</button>
        </form>
    )
}
