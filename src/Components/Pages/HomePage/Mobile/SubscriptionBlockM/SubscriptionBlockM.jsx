import React from 'react'

const SubscriptionBlockM = () => {
    return (
        <div>
            <section className="section-2-main hidden">
                <div className="inner">
                    <div className="sec2main-flexbox hidden">
                        <div className="sec2main-right">
                            <div className="giftflex-hidden">
                                <div>
                                    <p className="spam-subscribe hidden">
                                        Подпишитесь на рассылку
                                    </p>
                                    <h2 className="knowab-discounts hidden">
                                        Узнавайте о новых скидках и акциях первыми!
                                    </h2>
                                </div>
                                <img src="src/gift.png" alt="" />
                            </div>
                            <div className="sec2main-input hidden">
                                <input type="text" placeholder="Введите почту" />
                                <button>Получать письма об акциях</button>
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

export default SubscriptionBlockM