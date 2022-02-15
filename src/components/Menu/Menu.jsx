import React, { useState, useEffect } from 'react'
import Foodcard from '../Foodcard/Foodcard'
import './Menu.css'
import goods from '../../assets/goods.json'
import defaultPhoto from '../../assets/img/food/leberhause.jpg'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { db } from '../../db'
import { collection, getDocs } from 'firebase/firestore'
const Menu = (props) => {
  const ref = collection(db, 'goods')
  // console.log(ref)

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(ref)
      // console.log(ref)
      console.log(data.docs.map((doc) => ({ ...doc.data() })))
    }
    getData()
  }, [])
  let res = Object.entries(goods).map((cat, i) => {
    return (
      <div id={cat[0]} className="section-wrapper" key={`foodcard_${i}`}>
        {cat[1].map((sec_map, index) => {
          if (sec_map.id !== undefined) {
            return (
              <Foodcard
                key={`foodcard_${index}`}
                obj={sec_map}
                amount={props.items
                  .map((item) => {
                    if (sec_map.id === item.id) {
                      return item.amount
                    }
                  })
                  .filter((el) => el !== undefined)}
                img={defaultPhoto}
                addItem={props.addItem}
                deleteItem={props.deleteItem}
                increaseItem={props.increaseItem}
                decreaseItem={props.decreaseItem}
              />
            )
          }
        })}
      </div>
    )
  })
  return (
    <div>
      <Header whatPage={'Меню'} />
      <Navbar />
      <main className="menu">
        <div id="foodcards">
          <div id="goods">{res}</div>
        </div>
      </main>
    </div>
  )
}
export default Menu
