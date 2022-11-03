import React, { useState } from 'react';
import o from './OrderItem.module.scss';
import arrivedIcon from '../../../assets/images/arrivedIcon.svg';
import arrowDown from '../../../assets/images/arrowDown.svg';
import arrowUp from '../../../assets/images/arrowUp.svg';
import OrderAdditional from '../OrderAdditional';

function OrderItem({
  order: { name, date, additionalInfo, price, deliveryStatus, account },
}) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };


  return (
    <div className={o.order__container}>
      <div className={o.order__item}>
        <div className={o.item__description}>
          <div className={o.item__img}></div>
          <div className={o.item__content}>
            <div className={o.item__name}>{name}</div>
            <div className={o.item__details}>{date}</div>
          </div>
        </div>
        <div className={o.item__description}>
          <div className={o.item__delivery}>{deliveryStatus}</div>
          <div className={o.item__deliveryIcon}>
            <img src={arrivedIcon} alt="" />
          </div>
          <div className={o.item__price}>{price}</div>

          <span onClick={toggleShow} className={o.item__iconNext}>
            <img src={show ? arrowUp : arrowDown} alt="" />
          </span>
        </div>
      </div>
      {show && <OrderAdditional additionalInfo={additionalInfo} />}
    </div>
  );
}

export default OrderItem;
