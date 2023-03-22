import { NextPage } from "next";
import Form from "../components/Form";
import styles from '../styles/Contact.module.css'
import { contact } from "../services/sendContactForm";

const fieldsets = [
    { name: 'nombre', required: true },
    { name: 'email', required: true },
    { name: 'asunto', required: true },
    { name: 'mensaje', required: true },
]

const Contacto: NextPage = () => {
    return (
        <section className={styles.container}>
            <header>Diganos en que lo podriamos asistir</header>
            <Form fieldsets={fieldsets} btnTitle='Enviar' fn={contact} />
        </section>
    )
}

export default Contacto