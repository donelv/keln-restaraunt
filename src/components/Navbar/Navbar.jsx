import React, { useState, useEffect } from 'react'
import './Navbar.css'
import NavbarItem from '../NavbarItem/NavbarItem'
import { categories } from '../../categories'
const navItems = {
  ...categories,
}
const Navbar = (props) => {
  const setNavbarsPosition = () => {
    document.getElementsByClassName(
      `mynavbar-wrap-${props.activeCategory}`
    )[0].scrollLeft = 0
    var navbars = document.getElementsByClassName('mynavbar-wrap')
    for (var i = 0; i < navbars.length; i++) {
      var menus = navbars[i].getElementsByClassName('mynavbar_item_a')
      for (var j = 0; j < menus.length; j++) {
        if (menus[j].classList.contains('active')) {
          navbars[i].scrollLeft = menus[j].offsetLeft - 20
        }
      }
    }
  }
  useEffect(() => {
    setNavbarsPosition()
  }, [])
  const navbarItemList = Object.keys(navItems).map((e, i) => (
    <NavbarItem
      activeCategory={props.activeCategory}
      itemName={e}
      key={`item_${i}`}
      handleClick={setNavbarsPosition}
    />
  ))

  return (
    <section className="mynavbar">
      <div className={`mynavbar-wrap mynavbar-wrap-${props.activeCategory}`}>
        <ul>{navbarItemList}</ul>
      </div>
    </section>
  )
}
export default Navbar
