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

const home = 'Descubre cómo nuestros servicios de carpintería pueden transformar tu hogar. Contáctanos para una cotización gratis.'
const company = 'Somos una empresa de carpintería con años de experiencia en el sector. Ofrecemos servicios personalizados para satisfacer las necesidades de cada cliente.'
const galery = 'Explora nuestra galería de proyectos de carpintería y descubre lo que podemos hacer por ti. Desde muebles a medida hasta instalaciones comerciales, estamos aquí para ayudarte a hacer realidad tus ideas.'
const contacto = '¿Tienes alguna pregunta o estás interesado en nuestros servicios de carpintería? Ponte en contacto con nosotros y estaremos encantados de ayudarte.'

const pathnameMetaDescriptions = (path: string) :string => {
    switch (path) {
        case '/empresa': return company             
        case '/galeria': return galery             
        case '/contacto': return contacto             
        default: return home
    }
}

export default function Layout({ children }: Props) {
    const { pathname } = useRouter()

    return <>
        <Head>
            <title>{pathname === '/' ? 'Carpinteria Torres' : pathname.slice(1)}</title>
            <meta name="description" content={pathnameMetaDescriptions(pathname)} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow"/>
            <meta name="google-site-verification" content="1krYlTYUrfAS01AbdTXIBRFIONugLjzxvr1Ha9UXUjg" />
            <meta property="og:title" content="Carpinteria Torres" />
            <meta property="og:type" content="image" />
            <meta property="og:image" content='https://firebasestorage.googleapis.com/v0/b/carpentry-web-app.appspot.com/o/carpentry-logo.png?alt=media&token=67d3449e-6937-4c4f-b925-4e2a51f3b7ac' />
            <meta property="og:url" content="https://carpinteriatorres.com.ar" />
            <link rel="icon" href="/favicon.ico" />
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