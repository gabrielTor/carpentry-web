import { storage } from '../firebase'
import { ref, getDownloadURL, list } from 'firebase/storage'
import { Dispatch, SetStateAction } from 'react'

export const getImages = async (setState: Dispatch<SetStateAction<(string | Promise<string>)[]>>) => {
    const listRef = ref(storage, '/Gallery')
    const firstPage = await list(listRef, { maxResults: 30 })
    firstPage.items.forEach(async (itemRef) => {
        const path = await getDownloadURL(ref(storage, itemRef.fullPath))
        setState(prev => [...prev, path])
    })
}