import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyA5cf6VkZg1jGByczbWEg5XupNknveZUzs',
  authDomain: 'keln-restaraunt.firebaseapp.com',
  databaseURL: 'http://keln-restaraunt-default-rtdb.firebaseio.com',
  projectId: 'keln-restaraunt',
  storageBucket: 'keln-restaraunt.appspot.com',
  messagingSenderId: '724905727936',
  appId: '1:724905727936:web:94e201b89a37b579569a25',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const getData = async (coll) => {
  const colRef = collection(db, coll)
  return await getDocs(query(colRef, orderBy('id')))
}
