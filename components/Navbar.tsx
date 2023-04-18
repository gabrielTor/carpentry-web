import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import logo from '../assets/carpentry-logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useEffect, useState } from 'react'

const navArray = [
    { name: 'Inicio', id: 123, link: '/', isImage: false },
    { name: 'Empresa', id: 456, link: '/empresa', isImage: false },
    { name: logo, id: 789, link: '/', isImage: true },
    { name: 'Galeria', id: 741, link: '/galeria', isImage: false },
    { name: 'Contacto', id: 852, link: '/contacto', isImage: false }
]

const showHomeWebLogo = (isString: any) => typeof isString === 'string'

export default function Navbar() {
    const [active, setActive] = useState<boolean>(false)
    const [web, setWeb] = useState<boolean>(true)

    useEffect(() => window.outerWidth < 750 ? setWeb(false) : setWeb(true), [])

    const handleActive = () => {
        if (web) return
        setActive(prev => !prev)
    }

    return (
        <nav className={active ? styles.active : styles.navContainer}>
            <ul className={styles.navbar}>
                {navArray.map(item => (
                    <li className={showHomeWebLogo(item.name) ? styles.navItem : `${styles.logo} ${styles.navItem}`} key={item.id}>
                        <Link onClick={handleActive} href={item.link}>
                            {!item.isImage ? item.name as string : <Image src={item.name} alt='logo' width={150} height={150} priority />}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleActive}>
                {active ? 'X' : <RxHamburgerMenu size={25} />}
            </button>
        </nav>
    )
}