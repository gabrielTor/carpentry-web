import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD4TV6Yn_pEw6xLrwqgzm0d5-tYNgOUdJc",
    authDomain: "carpentry-web-app.firebaseapp.com",
    projectId: "carpentry-web-app",
    storageBucket: "carpentry-web-app.appspot.com",
    messagingSenderId: "540073087552",
    appId: "1:540073087552:web:9a55c13b9b15299222c5a5",
    measurementId: "G-V5XYLSJDPV"
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const storage = getStorage(app)
export const db = getFirestore(app)