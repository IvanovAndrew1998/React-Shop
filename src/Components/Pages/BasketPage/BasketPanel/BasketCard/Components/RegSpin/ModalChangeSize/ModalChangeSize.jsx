import React from 'react'
import './ModalChangeSize.css'

const ModalChangeSize = ({ modalSizeActive, setModalSizeActive, count, setCount, decr }) => {



    return (
        <div className={modalSizeActive ? "sizeModal active" : "sizeModal"} onClick={() => setModalSizeActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <div className="modalSizeChange">

                    <div className="MCSheader">
                        <p className='MCSdiscount'>-15%</p>
                        <div className="MCSprices">
                            <p className='MCSdiscounted'>5 419 р</p>
                            <p className='MCSoriginal'>6 419 р</p>
                        </div>
                    </div>
                    <div className="wholesalePanel">
                        <button className="MCSsingleSize">
                            40
                        </button>
                        <button className="MCSsingleSize">
                            50
                        </button>
                        <button className="MCSsingleSize">
                            40
                        </button>
                        <button className="MCSsingleSize">
                            40
                        </button>
                        <button className="MCSsingleSize">
                            40
                        </button>
                        <button className="MCSsingleSize">
                            40
                        </button>
                        <button className="MCSsingleSize">
                            40
                        </button>
                    </div>
                    <div className="MCSChoose">
                        <div className="chooseHeader">Выберите размер изделия</div>
                        <div className="chooseHowTo pointer">
                            <img src="src/question.svg" alt="" />
                            <p>Как узнать размер?</p>
                        </div>
                    </div>
                    <div className="MCSBottom">
                        <div className="MCSquantity">
                            <img src="src/Minus.svg" alt="" onClick={() => decr()}/>
                            <p>{count}</p>
                            <img src="src/Plus.svg" alt="" onClick={() => setCount(count + 1)}/>
                        </div>
                        <button className="MCSready" onClick={() => setModalSizeActive(false)}>Готово</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModalChangeSize