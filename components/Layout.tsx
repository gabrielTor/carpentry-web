import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import logo from '../assets/carpentry-logo.png'
import styles from '../styles/Nav.module.css'

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <main>
            <Link href='/' className={styles.mobileLogo}>
                <Image src={logo} alt='logo' width={150} height={150} />
            </Link>
            <Navbar />
            <div className="minPageSize">
                {children}
            </div>
            <Footer />
        </main>
    )
}
