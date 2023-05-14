import styles from '../styles/TextSection.module.css'
import { useRouter } from 'next/router'

export default function TextSection() {
    const { push } = useRouter()

    return (
        <section className={styles.container}>
            <div>
                <h1>Carpinteria Torres</h1>
                <h3>Carpinteria a medida.</h3>
                <p>Si tienes muy poco espacio en tu hogar y necesitas muebles que aprovechen cada centímetro a la vez que desarrollan un labor funcional y decorativo, somos tu mejor opción. Nuestro servicio de carpintería a medida es capaz de adecuar tus muebles a cualquier espacio. Imagínate poder tener una estantería que ocupe toda la pared y llegue hasta el techo, cuantos habitáculos para guardar tus libros o poner tus marcos de fotos ganarías. Además de la elegancia que le daría esa madera a tu salón. Cualquiera que sea tu necesidad, nuestra carpintería a medida es tu mejor solución.</p>
            </div>
            <div>
                <h4>WHATSAPP</h4>
                <a href='https://wa.me/+542615578851' target='_blank'>261-557-8851</a>
                <h4>DIRECCION</h4>
                <p>Peru 1264, Las Heras, Mendoza, CP5539</p>
                <button className='button' onClick={() => push('/contacto')}>Contactar</button>
            </div>
        </section>
    )
}
