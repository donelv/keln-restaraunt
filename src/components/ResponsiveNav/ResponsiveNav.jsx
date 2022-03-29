import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const ResponsiveNav = (props) => {
  const navRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        props.setNavActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navRef])

  return (
    <nav
      ref={navRef}
      className={
        props.navActive ? 'mobile-navbar_nav is-active' : 'mobile-navbar_nav'
      }
    >
      <NavLink to={'/main'} className="header__link">
        Главная
      </NavLink>
      <NavLink to={'/menu'} className="header__link">
        Меню
      </NavLink>
      <NavLink to={'/about'} className="header__link">
        О нас
      </NavLink>
      <NavLink to={'/delivery'} className="header__link">
        Доставка
      </NavLink>
    </nav>
  )
}
export default ResponsiveNav
