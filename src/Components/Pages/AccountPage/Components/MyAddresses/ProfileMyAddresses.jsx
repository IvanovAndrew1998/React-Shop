import React, { useRef } from 'react'
import './ProfileMyAddresses.css'
import { observer } from 'mobx-react-lite'

const ProfileMyAddresses = observer(({ children, modalDeleteActive, setModalDeleteActive }) => {

    

    function isScrollable(children) {
        let scrollable;
        if (children[0].length < 3) {
            scrollable = false
        } else { scrollable = true }
        return scrollable
    }
    isScrollable(children);

    const ref = useRef();

    const shiftLengthInc = 526;

    let current = 0;

    const cardAmount = children[0].length;

    function shiftBy(shiftLength) {
        const chld = Array.from(ref.current.children)

        chld.forEach(card => {
            card.style.left = shiftLength + 'px'

        });
    }

    function getShiftLength() {
        return current * shiftLengthInc
    }

    function inc() {

        if (current < 0) {
            current++;
            shiftBy(getShiftLength());
        }

    }

    function dec() {

        if (current > -cardAmount + 0) {
            current--;
            shiftBy(getShiftLength());
        }

    }


    return (
        <div >
            <div className="profileMyAddresses" id='MyAddressesSection'>
                <div className="profileHeader">Мои адреса</div>

                <div className="AccordeonPosition">

                    <img className={`AddressOuterContainerLeft-arrow` + ` ${isScrollable(children) ? 'pointer' : 'unScrollable'}`} src="src/mainarrow-left.svg" alt=""
                        onClick={inc}
                    />

                    <div className="profileMyAddressesContainer" onChange={isScrollable(children)} ref={ref}>

                        {children}

                    </div>

                    <img className={`AddressOuterContainerRight-arrow` + ` ${isScrollable(children) ? 'pointer' : 'unScrollable'}`} src="src/mainarrow-right.svg" alt=""
                        onClick={dec}
                    />

                </div>
            </div>

            <div className="personalDisclaimer">
                <img src="src/exclamationMarkGray.svg" alt="" />
                <p>Информация, которую вы укажете в этом разделе, публичная. Она указывается рядом с отзывами и видна другим пользователям сети Интернет.   </p>
            </div>
            
          
        </div>
    )
})

export default ProfileMyAddresses