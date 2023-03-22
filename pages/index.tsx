import type { NextPage } from 'next'
import Slider from '../components/Slider'
import img1 from '../assets/HomeSlider_Web_1.jpg'
import img2 from '../assets/HomeSlider_Web_2.jpg'
import img3 from '../assets/HomeSlider_Web_3.jpg'
import img4 from '../assets/HomeSlider_Web_4.jpg'
import img5 from '../assets/muebles.jpg'
import img6 from '../assets/logo-with-bg.jpg'
import ex1 from '../assets/ex1.jpg'
import ex2 from '../assets/ex2.jpg'
import ex3 from '../assets/ex3.jpg'
import TextSection from '../components/TextSection'
import Image from 'next/image'
import TextImg from '../components/TextImg'
import ImageList from '../components/ImageList'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const sliderArray = [img1, img2, img3, img4]
const sliderContent = sliderArray.map((a, i) => ({ id: ++i, src: a }))
const categoryImg = [
  { src: ex1, id: '123', title: 'Luxury' },
  { src: ex2, id: '1254', title: 'Comercial' },
  { src: ex3, id: '123897', title: 'Hospitality' }
]

const Home: NextPage = () => {
  const { push } = useRouter()

  return (
    <>
      <Slider content={sliderContent} />
       <TextSection />
       <div className={styles.images}>
       <Image alt='muebles' src={img5} />
      </div>
      <TextImg />
      <div className={styles.images}>
       <Image alt='muebles' src={img6} />
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