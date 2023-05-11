import React from 'react'

const SubscriptionBlock = () => {
  return (
    <div>
        <section className="section-2-main">
        <div className="inner">
          <div className="sec2main-flexbox">
            <div className="sec2main-left">
              <img src="/src/letter-gift.png" alt="" />
            </div>
            <div className="sec2main-right">
              <p className="spam-subscribe">
                Подпишитесь на рассылку
              </p>
              <h2 className="knowab-discounts">
                Узнавайте о новых скидках и акциях первыми!
              </h2>
              <div className="sec2main-input">
                <input type="text" placeholder="Введите почту" />
                <button>Подписаться</button>
              </div>
              <div className="sec2main-input2">
                <label className="container main-container">Даю согласие на обработку персонадльных данных, и принимаю <a href="">пользовательское соглашение</a>
                  <input type="checkbox" />
                  <span className="mark-main"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubscriptionBlock