import React from 'react'
import ArticleRight from './ArticleRight'

const Article = () => {
  return (
    <article className="article" id='navbar'>
                <div className="inner" >
                    <div className="article-left">
                        <nav>
                            <ul>
                                <img src="/src/threedots.svg" alt="" />
                                <li>
                                    <a href="#"> Женщинам</a>
                                </li>
                                <img src="/src/angle.svg" alt="" />
                                <li>
                                    <a href="#"> Цепи</a>
                                </li>
                                <img src="/rc/angle.svg" alt="" />
                                <li>
                                    <a href="#">Серебро</a>
                                </li>
                                <img src="/src/angle.svg" alt="" />
                                <li>
                                    <a href="#">Мужчинам</a>
                                </li>
                                <img src="/src/angle.svg" alt="" />
                                <li>
                                    <a href="#"> Изумруд</a>
                                </li>
                                <img src="/src/angle.svg" alt="" />
                            </ul>
                        </nav>
                    </div>
                    <ArticleRight/>
                </div>
            </article>
  )
}

export default Article