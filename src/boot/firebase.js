import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDdna8fiUl7Efdm3kPff1XabiDlE7UCEvo",
  authDomain: "quitter2-4837b.firebaseapp.com",
  projectId: "quitter2-4837b",
  storageBucket: "quitter2-4837b.appspot.com",
  messagingSenderId: "699690879175",
  appId: "1:699690879175:web:9213465e48ca9d113096e2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
