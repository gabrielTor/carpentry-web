import styles from '../styles/TextSection.module.css'
import { useRouter } from 'next/router'

export default function TextSection() {
    const { push } = useRouter()

    return (
        <section className={styles.container}>
            <div>
                <h1>Carpinteria Torres</h1>
                <h3>Carpinteria Personalizada y a medida.</h3>
                <p>Is a family owned and operated custom-woodwork corporation located in Miami,
                    Florida. For many generations superior craftsmanship has been a tradition in the
                    Martinez Family, our family. Today, Roberto & Robeisy Martinez <em>(3rd and 4th
                        Generations carpenters)</em> proudly offers some of the finest handcrafted
                    woodwork. For several years Robert Carpentry has provided its services to a
                    wide variety of Luxury Residences, Hotels & Condominium, Restaurants, Stores
                    and many more customers throughout South Florida and the Caribbean.</p>
            </div>
            <div>
                <h4>WHATSAPP</h4>
                <p>261-557-8851</p>
                <h4>DIRECCION</h4>
                <p>Peru 1264, Las Heras, Mendoza, CP5539</p>
                <button className='button' onClick={() => push('/contacto')}>Contactar</button>
            </div>
        </section>
    )
}
