import Image from 'next/image'
import img from '../assets/whatwedo.png'
import styles from '../styles/TextSection.module.css'

export default function TextImg() {
    return (
        <section className={styles.container}>
            <div>
                <Image alt='what we do' src={img} />
            </div>
            <div>
                <h1>LO QUE HACEMOS</h1>
                <p>
                    We provide our clients with years of experience of work with hardwoods, traditional plywood and the most exotic wood veneers which set the standard for a superior craftsmanship and an exceptional finish. Our finishing team is capable of matching any existing finish or creates the desirable client’s expectation.
                </p>
                <ul>
                    <li>LUXURY RESIDENCES</li>
                    <li>CONDOMINIUM LOBBY</li>
                    <li>RESTAURANT</li>
                    <li>COMMERCIAL</li>
                    <li>HANDCRAFTED FURNITURE</li>
                    <li>CUSTOM SOLID SURFACING MANUFACTURING</li>
                </ul>
                <button className='button'>Servicios</button>
            </div>
        </section>
    )
}
