import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.info}>
                <span>
                    <h4>Ubicacion</h4>
                    <p>Perú 1264, M5539 Las Heras, Mendoza</p>
                </span>
                <span>
                    <h4>Horarios</h4>
                    <p>Lunes a Viernes de 9:00 - 13:30<br /> 17:00 - 21:00 <br /> Sabado 9:00 - 14:00</p>
                </span>
                <span>
                    <h4>Redes Sociales</h4>
                    <p>facebook icono, instagram icono, twitter icono, etc</p>
                </span>
                <span>
                    <h4>Otra informacion</h4>
                    <p>algo....</p>
                </span>
            </div>
            <div className={styles.footer}>
                <h4>© Carpinteria Torres 2023. ALL RIGHTS RESERVED.</h4>
            </div>
        </div>
    )
}