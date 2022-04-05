import './MainPage.css'
import MainSlider from './MainSlider/MainSlider'
import tripadvisor from '../../../src/assets/img/tripadvisorBlack.svg'
import vk from '../../../src/assets/img/vkBlack.svg'
import { useEffect } from 'react'
const MainPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [])
  return (
    <div className="main-page">
      <div className="main-page__wrapper">
        <h1>Пивной Двор "Кёльн"</h1>
        <MainSlider />
        <div className="main-page__p">
          <p>
            Пивной Двор «Кёльн» может удивить любого, кто любит хорошее пиво,
            изысканную кухню и спокойную атмосферу, располагающую к отдыху в
            кругу близких и друзей.
          </p>
          <p>
            Приятный приглушенный свет, низкие потолки с деревянными балками,
            массивная мебель, пивные аксессуары удивительным образом перенесут
            Вас в старую добрую Европу, подарив уникальную возможность
            почувствовать себя жителем старинной процветающей Германии.
            Чувствуется, что основная идея любого немецкого ресторана –
            дружеская семейная атмосфера – реализована в этом месте с особой
            любовью к посетителям.
          </p>
          <p>
            В Кёльне можно назначить свидание, встретиться с друзьями и
            отдохнуть с детьми, устроить деловые переговоры, сыграть свадьбу и
            «поболеть» за наших.
          </p>
        </div>

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
