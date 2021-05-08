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

// create user profile
// this functions saves the user to database, ie firestore
export const createUserProfile = async (user, additionalData) => {
  if (!user) return

  const userRef = firestore.doc(`users/${user.uid}`) // gets the user ref in firestore
  const snapShot = await userRef.get() // gets the snapshot of reference, like an image

  // if the snapshot does not exist create the user, ie add the user to firestore
  if (!snapShot.exists) {
    const { displayName, email } = user
    const createdAt = new Date()

    // adding the user to firestore
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.error('error creating user', err.message)
    }
  }

  return userRef
}

// inserting arr collection to the firestore
export const addCollectionAndDocs = (collectionKey, objectsAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  // starting a process with adds the each obj to firestore
  const batch = firestore.batch()
  objectsAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  batch.commit()
}

// func to load collection from firestore
export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  console.log(transformedCollection)
}
