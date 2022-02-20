import React from 'react'
import Foodcard from '../Foodcard/Foodcard'
import './Menu.css'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
const Menu = (props) => {
  let res = Object.keys(props.menuItems).map((category) => {
    return (
      <div
        id={category}
        className="section-wrapper"
        key={`foodcard_${category}`}
      >
        {props.menuItems[category].map((item, index) => {
          return (
            <Foodcard
              key={`foodcard_${index}`}
              obj={item}
              amount={props.cartItems
                .map((state_item) => {
                  if (state_item.id === item.id) {
                    return state_item.amount
                  }
                })
                .filter((el) => el !== undefined)}
              addItem={props.addItem}
              deleteItem={props.deleteItem}
              increaseItem={props.increaseItem}
              decreaseItem={props.decreaseItem}
            />
          )
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
