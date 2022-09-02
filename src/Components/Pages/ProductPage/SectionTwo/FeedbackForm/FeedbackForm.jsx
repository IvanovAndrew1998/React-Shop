import React from 'react'
import style from './FeedbackForm.module.css'

const FeedbackForm = () => {
    return (
        <section class="section-3">
            <div class="inner">
                <div class="keep-feed">
                    <h2>Оставьте отзыв</h2>
                    <div class={style.element + " what-towrite"}>
                        <a href="#">Что написать</a>
                        <img src="src/question.svg" alt="" 

                        // MEM
                        />
                            <span class={style.tooltip}>Если что меня так заебало, что изменения вносятся на ходу, Леха пошел на хуй. Как же заебло, что код каждый раз устаревает, не успев блять доделаться</span>
            
                    </div>
                </div>
                <div class="feedback-less">
                    <p class="keep-feed">Поставьте оценку</p>
                    <div class="rating-line">
                        <p class="rating-num">4.0</p>
                        <img src="src/stars.svg" alt="" />
                    </div>
                    <p class="write-comment">
                        Напишите комментарий
                    </p>
                    <div class="text-area">
                        <textarea class="share" name="" placeholder="Поделитесь своим мнением о товаре" id="" cols="30" rows="10"></textarea>
                        <div class="figure">
                            <a href="">Изображение</a>
                            <img src="src/figure.svg" alt="" />
                        </div>
                    </div>
                    <div class="two-buttons">
                        <button class="btn-orange">
                            Опубликовтаь отзыв
                        </button>
                        <button class="btn-orange">
                            Сохранить черновик
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedbackForm