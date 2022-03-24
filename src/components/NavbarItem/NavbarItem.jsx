import React from 'react'
import { Link } from 'react-scroll'
import { categories } from '../../categories'
const NavbarItem = (props) => {
  let obj = {
    ...categories,
  }
  let aClass = 'mynavbar_item_a'
  if (props.itemName === props.activeCategory) aClass += ' active'
  return (
    <li className={'mynavbar_item'}>
      <Link
        activeClass="active"
        to={props.itemName}
        spy={false}
        smooth={true}
        offset={-125}
        duration={70}
        className={aClass}
        onClick={props.handleClick}
      >
        {obj[props.itemName]}
      </Link>
    </li>
  )
}
export default NavbarItem
