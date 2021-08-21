import firebase from 'firebase'

// firebase init
const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_KEY_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_KEY_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
}

firebase.initializeApp(config)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider();

const authStateChange = auth.onAuthStateChanged;
// collection references
const userItemsCollection = (userId: string) => db.collection(userId)

// export utils/refs
export {
  db,
  auth,
  userItemsCollection,
  googleProvider,
  authStateChange,
}
