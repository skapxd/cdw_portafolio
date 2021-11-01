// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCyHUuY5sDR6-kroOgkC_AElaDw5fy8UKA',
    authDomain: 'portafolio-319616.firebaseapp.com',
    projectId: 'portafolio-319616',
    storageBucket: 'portafolio-319616.appspot.com',
    messagingSenderId: '215909391592',
    appId: '1:215909391592:web:0fa06c52c44b884396fd5d',
    measurementId: 'G-MNXLM08MB8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const tempCollection = collection(db, 'posts')

    const data = {
        title: 'title',
        href: 'href'
    }

    try {
        const docRef = await addDoc(tempCollection, data)

        return res.json({
            success: true,
            id: docRef.id
        })
    } catch (error) {
        return res.json({
            success: false
        })
    }
}
