import './TemplatePage.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const TemplatePage = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [])
  return (
    <div className="main">
      <div className="success-page">
        <div className="success-page__title">{props.title}</div>
        <div className="success-page__p">{props.p}</div>
        <Link to={props.link} className="success-page__link">
          {props.linkText}
        </Link>
      </div>
    </div>
  )
}
export default TemplatePage
