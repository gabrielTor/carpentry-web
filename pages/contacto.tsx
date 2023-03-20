import { NextPage } from "next";
import Form from "../components/Form";
import styles from '../styles/Contact.module.css'

const fieldsets = [
    { name: 'Nombre', required: true },
    { name: 'Email', required: true },
    { name: 'Asunto', required: true },
    { name: 'Mensaje', required: true },
]

const Contacto: NextPage = () => {
    return (
        <section className={styles.container}>
            <header>Diganos en que lo podriamos asistir</header>
            <Form fieldsets={fieldsets} btnTitle='Enviar' />
        </section>
    )
}

export default Contacto