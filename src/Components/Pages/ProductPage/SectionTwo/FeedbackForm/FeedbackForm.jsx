import React, { useState } from 'react'
import Ratings from 'react-ratings-declarative/build/ratings'
import style from './FeedbackForm.module.css'

const FeedbackForm = () => {
    const [rated, setRated] = useState(5);
    return (
        <section className="section-3">
            <div className="inner">
                <div className="keep-feed">
                    <h2>Оставьте отзыв</h2>
                    <div className={style.element + " what-towrite"}>
                        <a href="#">Что написать</a>
                        <img src="src/question.svg" alt=""

                        // MEM
                        />
                        <span className={style.tooltip}>Если что меня так заебало, что изменения вносятся на ходу, Леха пошел на хуй. Как же заебло, что код каждый раз устаревает, не успев блять доделаться</span>

                    </div>
                </div>
                <div className="feedback-less">
                    <p className="keep-feed">Поставьте оценку</p>
                    <div className="rating-line">
                        <p className="rating-num">{rated + ".0"}</p>
                        <Ratings
                            changeRating={setRated}
                            rating={rated}
                            widgetRatedColors="#FBB03B"
                            svgIconPaths='M6.84996 6.05112L9 1.69466L11.15 6.05112C11.3321 6.42005 11.6841 6.67576 12.0912 6.73492L16.8988 7.43351L13.42 10.8245C13.1254 11.1117 12.991 11.5255 13.0605 11.931L13.8818 16.7192L9.58168 14.4585C9.21752 14.267 8.78248 14.267 8.41832 14.4585L4.11825 16.7192L4.93949 11.931C5.00904 11.5255 4.8746 11.1117 4.57999 10.8245L1.10116 7.43351L5.90879 6.73492C6.31593 6.67576 6.66788 6.42005 6.84996 6.05112Z'
                            svgIconViewBoxes='0 0 22 22'
                            widgetDimensions="26px"
                            widgetSpacings="0px"
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                        </Ratings>
                    </div>
                    <p className="write-comment">
                        Напишите комментарий
                    </p>
                    <div className="text-area">
                        <textarea className="share" name="" placeholder="Поделитесь своим мнением о товаре" id="" cols="30" rows="10"></textarea>
                        <div className="figure">
                            <a href="">Изображение</a>
                            <img src="src/figure.svg" alt="" />
                        </div>
                    </div>
                    <div className="two-buttons">
                        <button className="btn-orange">
                            Опубликовать отзыв
                        </button>
                        <button className="btn-orange">
                            Сохранить черновик
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedbackForm