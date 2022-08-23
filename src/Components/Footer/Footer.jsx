import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='inner'>
            <div className='footer-flexbox'>
                <div className='contacts'>
                    <h2>Контакты</h2>
                    <div className='phone-details'>
                        <p className='tel'>Горячая линия</p>
                        <a href="tel:8 800 234 99 99">8 800 234 99 99</a>
                    </div>
                    <div className='phone-details'>
                        <p className='tel'>ГРоизничные магазины</p>
                        <a href="tel:88 800 250 33 44">8 800 250 33 44</a>
                    </div>
                    <div className='social-media'>
                        <a href="#"><img src="src/TEL.svg" alt=""/></a>
                        <a href="#"><img src="src/whats.svg" alt=""/></a>
                        <a href="#"><img src="src/vk.svg" alt=""/></a>
                    </div>
                </div>
                <div className='email'>
                    <h2>Почта</h2>
                    <div className='email-details'>
                        <p className='email'>Основная</p>
                        <a href="tel:8 800 234 99 99">youmir@yandex.com</a>
                    </div>
                    <div className='email-details'>
                        <p className='tel'>Дополнительная</p>
                        <a href="tel:88 800 250 33 44">yvelirnuymir@mail.ru</a>
                    </div>
                </div>
                <div className='for-buyers'>
                    <h2>Покупателям</h2>
                    <div className='orange-details'>
                        <a href="#">Личный кабинет</a>
                        <a href="#">Адреса магазинов</a>
                        <a href="#">Возврат и обмен</a>
                        <a href="#">Рассрочка и кредит</a>
                        <a href="#">Безопасность</a>
                    </div>
                </div>
                <div className='about-us'>
                    <h2>О компании</h2>
                    <div className='orange-details'>
                        <a href="#">Вакансии</a>
                        <a href="#">Правовая информация</a>
                        <a href="#">Политика <br /> конфиденциальности</a>
                        <a href="#">Публичная оферта</a>
                    </div>
                </div>
            </div> 
            <div className='footer-map'>
                <div className='mapsec-left'>
                    <h3>Адрес</h3>
                    <p className='adress'>Марий Эл, г. Йошкар-Ола, ул. Кирова, дом № 6 </p>
                    <p className='from-to'>c 10:00 до 22:00</p>
                </div>
                <div className='mapsec-right'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2194.693347978216!2d47.92791531538009!3d56.62794413162351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415994d8fdd527e3%3A0xe091a6186f0667d7!2sKirova%20St%2C%206%2C%20Yoshkar-Ola%2C%20Respublika%20Mariy%20El%2C%20Russia%2C%20424038!5e0!3m2!1sen!2slt!4v1659334406927!5m2!1sen!2slt" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='footer-bottom'>
                <img src="src/Logo.svg" className="logo" alt="#"/>
                <small>2012 – 2022, © Ювелирная сеть Ювелирный мир. Все права защищены. Информация, размещенная на данной странице, не является публичной офертой.</small>
                <div className='to-start'>
                    <a href="#"><img src="src/up.svg" alt="" /></a>
                    <a href="#">Наверх</a>
                </div>
            </div>
        </div>       
    </footer>
  )
}

export default Footer