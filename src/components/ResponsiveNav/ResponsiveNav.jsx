import { NavLink } from 'react-router-dom'

const ResponsiveNav = (props) => {
  return (
    <nav
      // defined={props.navActive}
      className={
        props.navActive ? 'mobile-navbar_nav is-active' : 'mobile-navbar_nav'
      }
    >
      <NavLink
        to={'/main'}
        className="header__link"
        onClick={() => props.setNavActive(false)}
      >
        Главная
      </NavLink>
      <NavLink
        to={'/menu'}
        className="header__link"
        onClick={() => props.setNavActive(false)}
      >
        Меню
      </NavLink>
      <NavLink
        to={'/delivery'}
        className="header__link"
        onClick={() => props.setNavActive(false)}
      >
        Доставка
      </NavLink>
      {/* <NavLink to={'/delivery'} className="header__link"> 
        График
      </NavLink> */}
    </nav>
  )
}
export default ResponsiveNav
