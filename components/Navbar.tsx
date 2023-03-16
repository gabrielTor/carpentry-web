import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import logo from '../assets/carpentry-logo.png'

const navArray = [
    { name: 'Inicio', id: 123, link: '/', isImage: false },
    { name: 'Empresa', id: 456, link: '/empresa', isImage: false },
    { name: logo, id: 789, link: '/', isImage: true },
    { name: 'Galeria', id: 741, link: '/galeria', isImage: false },
    { name: 'Contacto', id: 852, link: '/contacto', isImage: false }
]

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.navbar}>
                {navArray.map(item => (
                    <li className={styles.navItem} key={item.id}>
                        <Link href={item.link}>
                            {!item.isImage ? item.name as string : <Image src={item.name} alt='logo' width={150} height={150} />}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}