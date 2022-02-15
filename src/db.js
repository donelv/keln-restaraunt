import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyA5cf6VkZg1jGByczbWEg5XupNknveZUzs',
  authDomain: 'keln-restaraunt.firebaseapp.com',
  databaseURL: 'https://keln-restaraunt-default-rtdb.firebaseio.com',
  projectId: 'keln-restaraunt',
  storageBucket: 'keln-restaraunt.appspot.com',
  messagingSenderId: '724905727936',
  appId: '1:724905727936:web:94e201b89a37b579569a25',
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
