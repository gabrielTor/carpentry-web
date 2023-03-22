import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import logo from '../assets/carpentry-logo.png'
import styles from '../styles/Nav.module.css'
import Head from "next/head"
import { useRouter } from "next/router"

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    const { pathname } = useRouter()

    return <>
        <Head>
            <title>{pathname === '/' ? 'Carpinteria Torres' : pathname.slice(1)}</title>
        </Head>
        <>
            <Link href='/' className={styles.mobileLogo}>
                <Image src={logo} alt='logo' width={150} height={150} />
            </Link>
            <Navbar />
            <main className="minPageSize">
                {children}
            </main>
            <Footer />
        </>
    </>
}
