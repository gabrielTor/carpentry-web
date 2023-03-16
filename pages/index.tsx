import type { NextPage } from 'next'
import Slider from '../components/Slider'
import img1 from '../assets/HomeSlider_Web_1.jpg'
import img2 from '../assets/HomeSlider_Web_2.jpg'
import img3 from '../assets/HomeSlider_Web_3.jpg'
import img4 from '../assets/HomeSlider_Web_4.jpg'

const sliderArray = [img1, img2, img3, img4]
const sliderContent = sliderArray.map((a, i) => ({ id: ++i, src: a }))

const Home: NextPage = () => {
  return (
    <>
      <Slider content={sliderContent} />
    </>
  )
}

export default Home
