import type { NextPage } from 'next'
import Slider from '../components/common/Slider'
import img1 from '../assets/HomeSlider_Web_1.jpg'
import img2 from '../assets/HomeSlider_Web_2.jpg'
import img3 from '../assets/HomeSlider_Web_3.jpg'
import img4 from '../assets/HomeSlider_Web_4.jpg'
import img5 from '../assets/mesa.jpg'
import img6 from '../assets/carpentry.jpg'
import img from '../assets/whatwedo.png'
import ex1 from '../assets/repare.webp'
import ex2 from '../assets/madera-maciza.jpeg'
import ex3 from '../assets//mueble_melamina.jpg'
import TextSection from '../components/TextSection'
import Image from 'next/image'
import TextImg from '../components/common/TextImg'
import ImageList from '../components/common/ImageList'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const sliderArray = [img1, img2, img3, img4]
const sliderContent = sliderArray.map((a, i) => ({ id: ++i, src: a }))
const categoryImg = [
  { src: ex1, title: 'Reparaciones' },
  { src: ex2, title: 'Madera Maciza' },
  { src: ex3, title: 'Muebles de Melamina' }
]
const list = [
  'Reparaciones',
  'Muebles de madera maciza',
  'Muebles de Melamina',
]
const info = 'En nuestro taller de carpintería de madera ofrecemos todos los servicios posibles referentes a este material. Cualquiera que sea tu necesidad, si se puede solventar con madera, somos expertos. Todos nuestros años de experiencia han sido acompañados de continua formación de nuestros profesionales. Las técnicas más antiguas y las más novedosas tienen cabida por igual en nuestras instalaciones. Ponte en contacto con nosotros para saber nuestro método de trabajo y tener la seguridad de estar tratando con las personas adecuadas. Todos nosotros tenemos gran pasión por nuestro trabajo, lo que tiene como consecuencia la elaboración de piezas de madera creadas de manera meticulosa, para acercarse a la perfección, y con mucho amor.'

const Home: NextPage = () => {
  const { push } = useRouter()

  return (
    <>
      <Slider content={sliderContent} />
      <TextSection />
      <div className={styles.images}>
        <Image alt='mesa' src={img5} />
      </div>
      <TextImg header='LO QUE HACEMOS'
        image={img}
        info={info}
        button={{ name: 'Servicios', route: '/empresa' }}
        style='container'
        list={list} />
      <div className={styles.images}>
        <Image alt='carpinteria' src={img6} />
      </div>
      <ImageList images={categoryImg} />
      <div className={styles.service}>
        <hr />
        <span>
          <button className='button' onClick={() => push('galeria')}>Ver Galeria</button>
        </span>
        <hr />
      </div>
    </>
  )
}

export default Home