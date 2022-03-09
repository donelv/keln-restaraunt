import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
  doc,
  setDoc,
  addDoc,
} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const getData = async (coll) => {
  const colRef = collection(db, coll)
  return await getDocs(query(colRef, orderBy('id')))
}
export const setOrder = async (data) => {
  let htmlString = ''
  let cartInfo = data.cart.map((item) => {
    htmlString += `<tr><td>${item.name}</td><td>${item.amount}</td><td>${item.price}₽</td></tr>`
    return {
      name: item.name,
      amount: item.amount,
      price: item.price,
    }
  })
  htmlString += `<tr><td colspan="2"><b>Итого:</b></td><td>${data.total}₽</td></tr>`
  //RANDOM ID FOR DOC
  addDoc(collection(db, 'orders'), {
    name: data.name,
    phone: data.phone,
    address: data.address,
    entrance: data.entrance,
    floor: data.floor,
    flat: data.flat,
    domofon: data.domofon,
    comment: data.comment,
    date: data.orderDate,
    cart: cartInfo,
    total: data.total,
    to: ['vaganovdd2@gmail.com'],
    message: {
      subject: `Заказ от ${data.orderDate.substring(0, 19)}`,
      text: ``,
      html: `<code style="font-family: Arial; font-size: 16px; line-height: 26px;">
        <body>
          <div><b>Имя:</b> ${data.name}</div>
          <div><b>Телефон:</b> ${data.phone}</div>
          <div><b>Адрес:</b> ${data.address}</div>
          <div><b>Подъезд:</b> ${data.entrance}</div>
          <div><b>Этаж:</b> ${data.floor}</div>
          <div><b>Домофон:</b> ${data.domofon}</div>
          <div><b>Кв./Офис:</b> ${data.flat}</div>
          <div><b>Время Заказа:</b> ${data.orderDate.substring(0, 19)}</div>
          <div><b>Комментарий:</b> ${data.comment}</div> 
          <table border="1" bordercolor="grey" cellpadding="6" cellspacing="0" style="margin-top: 20px">
            <tr>
              <th>Наименование</th>
              <th>Кол-во</th>
              <th>Цена</th>
            </tr>
            ${htmlString}
          </table>
        </body>
      </code>`,
    },
  }).then(() => console.log('Заказ в Firestore'))

  // const ordersRef = doc(db, 'orders', 'test')
  // setDoc(ordersRef, {
  //   name: data.name,
  //   phone: data.phone,
  //   address: data.address,
  //   entrance: data.entrance,
  //   floor: data.floor,
  //   flat: data.flat,
  //   domofon: data.domofon,
  //   comment: data.comment,
  //   date: data.orderDate,
  //   cart: cartInfo,
  //   total: data.total,
  //   to: ['vaganovdd2@gmail.com'],
  //   message: {
  //     subject: `Заказ от ${data.orderDate.substring(0, 19)}`,
  //     text: ``,
  //     html: `<code style="font-family: Arial; font-size: 16px; line-height: 26px;">
  //       <body>
  //         <div><b>Имя:</b> ${data.name}</div>
  //         <div><b>Телефон:</b> ${data.phone}</div>
  //         <div><b>Адрес:</b> ${data.address}</div>
  //         <div><b>Подъезд:</b> ${data.entrance}</div>
  //         <div><b>Этаж:</b> ${data.floor}</div>
  //         <div><b>Домофон:</b> ${data.domofon}</div>
  //         <div><b>Кв./Офис:</b> ${data.flat}</div>
  //         <div><b>Время Заказа:</b> ${data.orderDate.substring(0, 19)}</div>
  //         <div><b>Комментарий:</b> ${data.comment}</div>
  //         <table border="1" bordercolor="grey" cellpadding="6" cellspacing="0" style="margin-top: 20px">
  //           <tr>
  //             <th>Наименование</th>
  //             <th>Кол-во</th>
  //             <th>Цена</th>
  //           </tr>
  //           ${htmlString}
  //         </table>
  //       </body>
  //     </code>`,
  //   },
  // }).then(() => console.log('Заказ в Firestore', data.orderDate))
}
