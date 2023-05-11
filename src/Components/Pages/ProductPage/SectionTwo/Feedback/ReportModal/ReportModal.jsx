import React, { useState } from 'react'
import './ReportModal.css'

const ReportModal = ({ active, setActive }) => {

    const [reported, setReported] = useState(false)



    return (
        <div className={active ? "reportModal active" : "reportModal"} onClick={() => setActive(false)}>

            <div className="reportModalContent" onClick={e => e.stopPropagation()}>
                {
                    (reported === false)
                        ?
                        <ul className='reportList'>
                            <li className='reportOption' onClick={() => setReported(true)}>
                                <p>Спам</p>
                                <img src="/src/arrow-rightGray.svg" alt="" />
                            </li>
                            <li className='reportOption' onClick={() => setReported(true)}>
                                <p>Откровенное изображение</p>
                                <img src="/src/arrow-rightGray.svg" alt="" />
                            </li>
                            <li className='reportOption' onClick={() => setReported(true)}>
                                <p>Оскорбление, нецензурная лексика</p>
                                <img src="/src/arrow-rightGray.svg" alt="" />
                            </li>
                            <li className='reportOption' onClick={() => setReported(true)}>
                                <p>Жестокое или отталкивающее содержание</p>
                                <img src="/src/arrow-rightGray.svg" alt="" />
                            </li>
                            <li className='reportOption' onClick={() => setReported(true)}>
                                <p>Насилие и вражда</p>
                                <img src="/src/arrow-rightGray.svg" alt="" />
                            </li>
                            <li className='reportOption' onClick={() => setReported(true)}>
                                <p>Обман</p>
                                <img src="/src/arrow-rightGray.svg" alt="" />
                            </li>
                        </ul>
                        : null
                }
                {
                    (reported === true)
                        ?
                        <div>
                            <p className='successfulReport'>Ваша жалоба будет рассмотрена. Спасибо!</p>
                            <button className='okayButton' onClick={() => setActive(false)}>Принять</button>
                        </div>
                        : null
                }
            </div>

        </div>
    )
}

export default ReportModal