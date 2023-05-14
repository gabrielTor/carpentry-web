import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { getImages } from '../services/getImages'
import styles from '../styles/Gallery.module.css'
import Image from 'next/image'

const loadUrl = ({ src, width }: { src: string, width: number }) => `${src}?s=${width}`
const loaderArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const Galeria: NextPage = () => {
    const [urls, setUrls] = useState<(string | Promise<string>)[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    let mounted = true

    useEffect(() => {
        if (mounted){
            getImages(setUrls)
            setTimeout(() => setIsLoading(false), 2000)
        }
        return () => { mounted = false }
    }, [])

    return (
        <div className={styles.container}>
            {isLoading ?
                loaderArray.map((a) => <div key={a} className={styles.loader} />)
                :
                urls?.map((src) => (
                    <Image key={src as string}
                        loader={loadUrl}
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