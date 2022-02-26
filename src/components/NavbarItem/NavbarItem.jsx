import React from 'react'
import { useEffect } from 'react'
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

  // document.getElementsByClassName(
  //   `mynavbar-wrap-${props.activeCategory}`
  // )[0].scrollLeft = 100
  const handleScroll = (el) => {
    document.getElementsByClassName('nav-menu')[0].scrollLeft = 0
    var menus = document.getElementsByClassName('nav-menu__item')
    for (var i = 0; i < menus.length; i++) {
      if (menus[i].classList.contains('active')) {
        document.getElementsByClassName('nav-menu')[0].scrollLeft =
          menus[i].offsetLeft
      }
    }
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
  // const testFunc = (el) => {
  //   console.log(el)
  //   document.getElementsByClassName('mynavbar-wrap')[0].scrollLeft = 20
  // }
  // console.log(document.getElementsByClassName('mynavbar-wrap')[0])
  let aClass = 'mynavbar_item_a'
  if (props.itemName === props.activeCategory) aClass += ' active'
  // document.getElementsByClassName('mynavbar')[0].scrollLeft = 20
  return (
    <li className={'mynavbar_item'}>
      <Link
        // className={'active'}
        activeClass="active"
        to={props.itemName}
        spy={false}
        smooth={true}
        offset={-125}
        duration={70}
        className={aClass}
        onClick={props.handleClick}
        // onClick={testFunc}
        // onSetActive={handleScroll}
        // onScroll={testFunc}
      >
        {obj[props.itemName]}
      </Link>
    </li>
  )
}
export default NavbarItem
