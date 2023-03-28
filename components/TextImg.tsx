import Image, { StaticImageData } from 'next/image'
import styles from '../styles/TextSection.module.css'
import { useRouter } from 'next/router'

interface Props {
    header: string
    info: string
    image: StaticImageData
    style: string
    button?: { name: string, route: string }
    list?: string[]
}

export default function TextImg({ header, info, image, style, button, list }: Props) {
    const { push } = useRouter()

    return (
        <section className={styles[style]}>
            <div>
                <Image alt={header} src={image} />
            </div>
            <div>
                <h1>{header}</h1>
                <p>{info}</p>
                <ul>
                    {list?.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                {button &&
                    <button className='button' onClick={() => push(button.route)}>
                        {button.name}
                    </button>
                }
            </div>
        </section>
    )
}
