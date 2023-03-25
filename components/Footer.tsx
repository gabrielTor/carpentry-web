import styles from '../styles/Footer.module.css'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.info}>
                <span>
                    <h4>Ubicacion</h4>
                    <address>Perú 1264, M5539 Las Heras, Mendoza</address>
                </span>
                <span>
                    <h4>Horarios</h4>
                    <p>Lunes a Viernes de 9:00 - 13:30<br /> 17:00 - 21:00 <br /> Sabado 9:00 - 14:00</p>
                </span>
                <span>
                    <h4>Redes Sociales</h4>
                    <p>
                        <Link href='https://www.facebook.com/profile.php?id=100070237831654' target='_blank'><FaFacebookSquare /></Link>
                        <FaTwitterSquare />
                        <FaInstagram />
                    </p>
                </span>
                <span>
                    <h4>Informacion extra</h4>
                    <p>Pagina desarrollada y mantenida por {' '}
                        <Link href='https://gabrieltor.github.io/portfolio' target='_blank' className={styles.link}>
                            DGT
                        </Link></p>
                </span>
            </div>
            <div className={styles.footer}>
                <h4>© Carpinteria Torres 2023. ALL RIGHTS RESERVED.</h4>
            </div>
        </footer>
    )
}