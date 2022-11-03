import React from 'react';
import o from './OrderAdditional.module.scss';
import delivery from '../../../assets/images/delivery.svg';
import download from '../../../assets/images/download.svg';
import send from '../../../assets/images/send.svg';
import status from '../../../assets/images/status.svg';
import cancel from '../../../assets/images/cancel.svg';
import OrderAdditionalItem from './OrderAdditionalItem';
function OrderAdditional(props) {
  console.log(props);
  return (
    <div className={o.additionalInfo}>
      <div className={o.additionalInfo__tab}>
        <span className={o.tab__btn}>
          <img className={o.tab__img} src={download} alt="" />
          <div>Скачать чек</div>
        </span>
        <span className={o.tab__btn}>
          <img className={o.tab__img} src={send} alt="" />
          <div>Отправить чек</div>
        </span>
        <span className={o.tab__btn}>
          <img className={o.tab__img} src={status} alt="" />
          <div>Статус доставки</div>
        </span>
        <span className={o.tab__btn}>
          <img className={o.tab__img} src={cancel} alt="" />
          <div>Отменить заказ</div>
        </span>
      </div>
      <hr></hr>
      <div className={o.additionalInfo__address}>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Продавец:</p>
          <p>{/* {title} {account} */}</p>
        </div>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Время покупки:</p>
          {/* <p>{date}</p> */}
        </div>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Адрес доставки:</p>
          <p>{/* {street} {house} */}</p>
        </div>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Метод оплаты:</p>
          {/* <p>{props.order.paymentType}</p> */}
        </div>
      </div>
      <hr></hr>
      {props.additionalInfo.items.map((item) => (
        <OrderAdditionalItem item={item} />
      ))}
      <hr></hr>
      <div className={o.additionalInfo__delivery}>
        <img src={delivery} alt="" />
      </div>
    </div>
  );
}

export default OrderAdditional;
