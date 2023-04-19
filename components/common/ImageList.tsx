import Image, { StaticImageData } from "next/image"
import styles from '../../styles/Img.module.css'

interface Props {
    images: {
        src: StaticImageData,
        title?: string
    }[],
}

export default function ImageList({ images }: Props) {
    return (
        <section className={styles.container}>
            {
                images.map(({ src, title }) => (
                    <span key={title}>
                        <Image alt={title || 'no title'} src={src} />
                        <h2>{title}</h2>
                    </span>
                ))
            }
        </section>
    )
}
