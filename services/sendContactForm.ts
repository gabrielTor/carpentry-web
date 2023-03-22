import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const emailCollection = collection(db, 'emails')

export const contact = async (values?: EmailBody) => {
    try {
        await addDoc(emailCollection, values)
        await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
    } catch (error) {
        console.log(error)
    }
}