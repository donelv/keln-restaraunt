import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
const NavbarItem = (props) => {
  let obj = {
    salads: 'Салаты',
    coldSnacks: 'Холодные закуски',
    hotSnacks: 'Горячие закуски',
    soups: 'Супы',
    garnish: 'Гарниры',
    desserts: 'Десерты',
    meatDishes: 'Мясные блюда',
    fishDishes: 'Рыбные блюда',
    steamedDishes: 'Блюда на пару',
    sausages: 'Колбаски',
    steaks: 'Стейки',
  }
  const handleScroll = (el) => {
    /*document.getElementsByClassName('nav-menu')[0].scrollLeft = 0
    var menus = document.getElementsByClassName('nav-menu__item')
    for (var i = 0; i < menus.length; i++) {
      if (menus[i].classList.contains('active')) {
        document.getElementsByClassName('nav-menu')[0].scrollLeft =
          menus[i].offsetLeft
      }
    }*/
    //setTimeout(() => console.log(el), 1000)
    /*
    var items = document.getElementsByClassName('mynavbar_item')

    for (var i = 0; i < items.length; i++) {
      if (items[i].children[0].classList.contains('active')) {
        document.getElementsByClassName('mynavbar-with-scroll')[0].scrollLeft =
          items[i].offsetLeft - 20
      }
    }*/
  }
  const scrollToCategory = (el) => {
    //console.log(document.getElementsByClassName('getelem'))
    /*document
      .getElementsByClassName('mynavbar_item')[4]
      .scrollIntoView({ inline: 'start' })*/
    //el.scrollIntoView({ inline: 'center' })
    document.getElementsByClassName(el)[0].scrollIntoView({ inline: 'center' })
  }
  return (
    <li className={'mynavbar_item'}>
      <Link
        //className={props.itemName}
        activeClass="active"
        to={props.itemName}
        spy={true}
        smooth={true}
        offset={-155}
        duration={70}
        //onSetActive={scrollToCategory}
      >
        {obj[props.itemName]}
      </Link>
    </li>
  )
}
export default NavbarItem
