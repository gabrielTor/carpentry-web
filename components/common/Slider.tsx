import styles from "../../styles/Slider.module.css";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  content: {
    id: number;
    src: StaticImageData;
  }[];
}

export default function Slider({ content }: Props) {
  const [slide, setSlide] = useState<number>(1);

  const nextBtn = (): void => {
    if (slide === content.length) setSlide(1);
    else setSlide((prev) => prev + 1);
  };
  const prevBtn = (): void => {
    if (slide === 1) setSlide(content.length)
    else setSlide(prev => prev - 1)
  }

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      nextBtn();
    }, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className={styles.sliderContainer}>
      {content.map(({ id, src }) => (
        <div key={id}>
          <Image
            className={
              id === slide
                ? `${styles.display} ${styles.fade}`
                : styles.noDisplay
            }
            src={src}
            alt="sliderImages"
            priority={true}
          />
        </div>
      ))}

      <div className={styles.dotContainer}>
        {content.map(({ id }) => (
          <span
            key={id}
            onClick={() => setSlide(id)}
            className={
              id === slide ? `${styles.dot} ${styles.active}` : styles.dot
            }
          ></span>
        ))}
      </div>

      <div className={styles.button}>
        <button onClick={prevBtn}>&#10094;</button>
        <button onClick={nextBtn}>&#10095;</button>
      </div>
    </div>
  )
}