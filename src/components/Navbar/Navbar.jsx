import React, { useState, useEffect } from 'react'
import './Navbar.css'
import NavbarItem from '../NavbarItem/NavbarItem'
const navItems = {
  salads: null,
  coldSnacks: null,
  hotSnacks: null,
  soups: null,
  garnish: null,
  desserts: null,
  meatDishes: null,
  fishDishes: null,
  steamedDishes: null,
  sausages: null,
  steaks: null,
}
const Navbar = () => {
  const navbarItemList = Object.keys(navItems).map((e, i) => (
    <NavbarItem itemName={e} key={`item_${i}`} />
  ))

  return (
    <section className="mynavbar">
      <div className="mynavbar-wrap">
        <ul>{navbarItemList}</ul>
      </div>
    </section>
  )
}
export default Navbar
