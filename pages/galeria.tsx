import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { getImages } from '../services/getImages'
import styles from '../styles/Gallery.module.css'

const Galeria: NextPage = () => {
    const [urls, setUrls] = useState<(string | Promise<string>)[]>([])
    let mounted = true

    useEffect(() => {
        if (mounted) getImages(setUrls)
        return () => { mounted = false }
    }, [])

    return (
        <div className={styles.container}>
            {
                urls?.map((src) => (
                    <img key={src as string}
                        src={src as string}
                        alt={'imagen de galeria'}
                        width={120}
                        height={120} />
                ))
            }
        </div>
    )
}

export default Galeria;