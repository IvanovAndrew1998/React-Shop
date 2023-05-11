import React from 'react'
import './MapSidebar.css'

const MapSidebar = () => {
  return (
    <div className='MapSidebar'>

      <div className="MapSidebarHeader">Cамовывоз</div>

      <div className="MapSidebarContent">

        <div className="MSPointName">

          <p>Ювелирный мир</p>
          <img className='pointer' src="/src/Xicon.svg" alt="" />

        </div>
        <div className="MSPriceBlock">

          <p className='MSPriceDate'>Пункт выдачи 31 сент</p>
          <p className='MSPrice'>300р</p>

        </div>

        <div className="MSFlexBlock">

          <div className="MSFBtop">

            <div className="MSAddressBlock">

              <div className="MSAddressHeader">
                <img src="/src/LocationBlue.svg" alt="" />
                <p>Адрес</p>
              </div>
              <p>Россия, Республика Марий Эл, Йошкар-Ола, Ленинский проспект, 41</p>

            </div>

            <div className="MSHoursBlock">

              <img src="/src/guideSection/ClockIcon.svg" alt="" />
              <div className="MSHours">
                <div className="MSdays">
                  <p className='MSInterval'>Пн-Пт</p>
                  <p>10:30 - 19:30</p>
                </div>
                <div className="MSdays">
                  <p className='MSInterval'>Сб-Вс</p>
                  <p>09:00 - 20:00</p>
                </div>
              </div>

            </div>

          </div>

          <div className="MSFBbottom">

            <div className="MSStoragePeriod">

              <img src="/src/guideSection/CalendarIcon.svg" alt="" />
              <div className="MSStoragePeriodText">

                <div className="StoragePeriodTop">
                    Срок хранения заказа
                </div>
                <div className="StoragePeriodBottom">
                    7 дней
                </div>

              </div>

            </div>

            <div className="MSDisclaimer">
            При отказе от заказа после его создания обратная доставка может быть платной. 
            </div>

            <button className='MSButton pointer'>Выбрать пункт выдачи</button>

          </div>

        </div>





      </div>

    </div>
  )
}

export default MapSidebar