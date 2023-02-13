import React from 'react';

//redux
import { useDispatch } from 'react-redux';
import { decrease , increase , removeItem } from '../../redux/cart/cartAction';

//Function
import { shorter } from '../../helper/functions';

//Icon
import trashIcon from '../../assets/icon/trash.svg'

//Style
import styles from './Cart.module.css'

const Cart = (props) => {

    const dispatch = useDispatch()
    const {image,price,title,quantity} = props.data
   
    return (
        <div className={styles.container}>
           <img src={image} alt='product' className={styles.img}/> 
           <div className={styles.data}>
               <h3 className={styles.title}>{shorter(title)}</h3>
               <p className={styles.price}>{price} $</p>
           </div>
           <div>
               <span className={styles.quantity}>{quantity}</span>
           </div>
           <div className={styles.button}>
           {quantity > 1 ?
              <button className={styles.smallButton} onClick={()=>dispatch(decrease(props.data))}>-</button> :
              <button className={styles.smallButton} onClick={()=>dispatch(removeItem(props.data))}><img src={trashIcon} alt='trash' style={{width:'20px'}}/></button>
           }
              <button className={styles.smallButton} onClick={()=>dispatch(increase(props.data))}>+</button>
           </div>
        </div>
    );
};

export default Cart;