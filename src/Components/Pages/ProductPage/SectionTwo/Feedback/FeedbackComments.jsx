import React from 'react'

const FeedbackComments = () => {
  return (
    <div className="flexbox2-left">
                            <div className="feedback-2">
                                <h2 className="feedback-h2" id="feedbackLink">Отзывы</h2>
                                <img src="src/threeF.svg" alt="" />
                            </div>
                            <div className="feedback-container">
                                <div className="feedback-up">
                                    <div className="feedback-num">
                                        <img src="src/guy.svg" alt="" />
                                        <div className="name-num">
                                            <p className="feedback-name">Екатерина</p>
                                            <p className="feedback-nub">2 отзыва</p>
                                        </div>
                                    </div>
                                    <div className="rating-line">
                                        <p className="rating-num">4.0</p>
                                        <img src="src/stars.svg" alt="" />
                                    </div>
                                    <p className="conmment">
                                        Отвратительное отношение к клиентам, подарили мне кольцо и проходила я с ним две недели, в один день посмотрев на палец, заметила что камня нет! Нигде не ударялась, ничего!!! Отправила по гарантии на экспертизу, мне отказано.
                                    </p>
                                    <div className="feedback-flexbox">
                                        <div className="feedbackphoto-left">
                                            <img src="src/feed-photo.png" alt="" />
                                        </div>
                                        <div className="feedbackphoto-right">
                                            <img src="src/feedphoto-up.png" alt="" />
                                            <img src="src/feedphoto-up.png" alt="" />
                                            <p className="else">Еще 1</p>
                                        </div>
                                    </div>
                                    <div className="date-like">
                                        <p className="date">12.05.2022</p>
                                        <div className="like-dislike">
                                            <div className="dislike">
                                                <img src="src/dislike.svg" alt="" />
                                                <p className="dislikes">0</p>
                                            </div>
                                            <div className="like">
                                                <img src="src/like.svg" alt="" />
                                                <p className="likes">1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-down">
                                    <div className="feedback-num">
                                        <img src="src/guy.svg" alt="" />
                                        <div className="name-num">
                                            <p className="feedback-name">Екатерина</p>
                                            <p className="feedback-nub">2 отзыва</p>
                                        </div>
                                    </div>
                                    <div className="rating-line">
                                        <p className="rating-num">4.0</p>
                                        <img src="src/stars.svg" alt="" />
                                    </div>
                                    <p className="conmment">
                                        Отвратительное отношение к клиентам, подарили мне кольцо и проходила я с ним две недели, в один день посмотрев на палец, заметила что камня нет! Нигде не ударялась, ничего!!! Отправила по гарантии на экспертизу, мне отказано.
                                    </p>
                                    <div className="date-like">
                                        <p className="date">12.05.2022</p>
                                        <div className="like-dislike">
                                            <div className="dislike">
                                                <img src="src/dislike.svg" alt="" />
                                                <p className="dislikes">0</p>
                                            </div>
                                            <div className="like">
                                                <img src="src/like.svg" alt="" />
                                                <p className="likes">1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}

export default FeedbackComments