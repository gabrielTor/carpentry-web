import { NextPage } from "next";
import Form from "../components/common/Form";
import styles from '../styles/Contact.module.css'
import { contact } from "../services/sendContactForm";
import Map from "../components/Map";

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
            <section className={styles["form-map-container"]}>
                <Form fieldsets={fieldsets} btnTitle='Enviar' fn={contact} />
                <Map marker={[-32.853158138192946, -68.84661782109399]}
                    popupText='Peru 1264, Las Heras, Mendoza' />
            </section>
        </section>
    )
}

export default Contacto