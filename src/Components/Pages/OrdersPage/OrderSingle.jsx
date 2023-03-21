import React, { useRef, useState } from 'react'
import ProductCard from '../PRODUCTCARD/ProductCard';
import ODinfoPanel from './OrderDetails/Components/ODinfoPanel/ODinfoPanel';
import ODupperPanel from './OrderDetails/Components/ODupperPanel/ODupperPanel'


const OrderSingle = ({result}) => {

    const [opened, setOpened] = useState(false);
    
    const panel = useRef(0);
    let height = opened ? 0 : panel.current.scrollHeight + 'px';

    return (
        <div className="orderContainer">
            <div className='orderAccordionButton'>
                <img className={`AccordionArrow ${opened ? " " + 'rotated' : ""}`} src="src/arrow-d.svg" alt="" onClick={() => setOpened(!opened)} />
            </div>
            <div className="OrderDetails">
                <ODupperPanel id='orderedProducts'
                    orderID={result.id}
                    products={result.products}
                    shipmentType={result.shipment_type}
                    orderStatus={result.order_status}

                    orderSum={result.order_sum}
                    created={result.created}
                >

                </ODupperPanel>
                <div className="OrderAccordionContainer"
                    ref={panel}

                    style={{ maxHeight: height }}
                >

                    <ODinfoPanel
                        recieverName={result.reciever_name}
                        recieverEmail={result.reciever_email}
                        recieverPhone={result.reciever_phone}
                        shippingAddress={result.shipping_address}
                    />
                    <div className="ODgrid">
                       {/* Смапить карточки */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderSingle