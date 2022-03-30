import './MainPage.css'
import MainSlider from './MainSlider/MainSlider'
import tripadvisor from '../../../src/assets/img/tripadvisorBlack.svg'
import vk from '../../../src/assets/img/vkBlack.svg'
const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__wrapper">
        <h1>Пивной Двор "Кёльн"</h1>
        <MainSlider />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in
          eveniet rem quis maxime ad aspernatur, veniam, consequuntur quae illum
          reprehenderit molestiae quam amet tempora est sequi neque! Veritatis,
          laboriosam? <br />
          Пивной Двор «Кёльн» может удивить любого, кто любит хорошее пиво,
          изысканную кухню и спокойную атмосферу, располагающую к отдыху в кругу
          близких и друзей.
        </p>
        <div className="main-page__web">
          <span>Мы в других местах:</span>
          <div className="main-page__img">
            <a
              href={'https://vk.com/keln_nv'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vk} alt="Вконтакте"></img>
            </a>
          </div>
          <div className="main-page__img">
            <a
              href="https://www.tripadvisor.ru/Restaurant_Review-g799519-d6190333-Reviews-Keln-Nizhnevartovsk_Khanty_Mansi_Autonomous_Okrug_Yugra_Tyumen_Oblast_Urals_Distr.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tripadvisor} alt="Tripadvisor"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainPage
