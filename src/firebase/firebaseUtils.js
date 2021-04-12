import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBHE2TbOzLNronKoNblkLvIIknMclnYtgM",
    authDomain: "crwn-db-8aa8b.firebaseapp.com",
    projectId: "crwn-db-8aa8b",
    storageBucket: "crwn-db-8aa8b.appspot.com",
    messagingSenderId: "442969732619",
    appId: "1:442969732619:web:90ed6ade7f59698ecab90e",
    measurementId: "G-3W1X7LZ3GJ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;