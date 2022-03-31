import { NavLink } from 'react-router-dom'

const ResponsiveNav = (props) => {
  return (
    <nav
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
      {/* <NavLink to={'/delivery'} className="header__link">
        График
      </NavLink> */}
    </nav>
  )
}
export default ResponsiveNav
