import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAoYCDOUphTP9wp86sG_b7N-fyLcdK3ju4',
  authDomain: 'crwn-ecom-fc028.firebaseapp.com',
  projectId: 'crwn-ecom-fc028',
  storageBucket: 'crwn-ecom-fc028.appspot.com',
  messagingSenderId: '466984697187',
  appId: '1:466984697187:web:b01ee98c7bef77a0d9a756',
}

// initialize app
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// auth stuff
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
