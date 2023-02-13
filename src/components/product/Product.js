import React from 'react';
import { shorter,isInCart,quantityCount } from '../../helper/functions';
import { Link } from 'react-router-dom';

//redux
import {addItem , removeItem , increase , decrease } from '../../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';

// Icon
import trashIcon from "../../assets/icon/trash.svg"

//Styles
import styles from './Product.module.css'

const Product = ({productsData}) => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    return (
        <div className={styles.card}>
            <img src={productsData.image} alt='products' className={styles.img} />
            <h3 className={styles.title}>{shorter(productsData.title)}</h3>
            <p className={styles.price}>{productsData.price + ' $'}</p>
            <div className={styles.buttonBox}>
                <Link className={styles.detail} to={`/products/${productsData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                  {quantityCount(state,productsData.id) > 1 && <button className={styles.smallButton} onClick={()=>dispatch(decrease(productsData))}>-</button>}
                  {quantityCount(state,productsData.id) === 1 && <button className={styles.smallButton} onClick={()=>dispatch(removeItem(productsData))}><img src={trashIcon} alt='trash'/></button>}
                  {quantityCount(state,productsData.id) > 0 && <span className={styles.count}>{quantityCount(state,productsData.id)}</span>}
                  {
                      isInCart(state,productsData.id) ?
                       <button className={styles.smallButton} onClick={()=>dispatch(increase(productsData))}>+</button> :
                       <button onClick={()=>dispatch(addItem(productsData))}>Add to Cart</button>
                  }
                </div>
            </div>
        </div>
    );
};

export default Product;