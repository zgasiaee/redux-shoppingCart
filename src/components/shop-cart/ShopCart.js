import React from 'react'
import { Link } from 'react-router-dom'

//redux
import { clear , checkOut } from '../../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux'

//Component
import Cart from '../cart/Cart'

//Style
import styles from './ShopCart.module.css'

const ShopCart = () => {

  const state = useSelector(state => state.cartState)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
         {state.selectedItem.map((item) => ( <Cart key={item.id} data={item} /> ))}
      </div>
      {state.itemCounter > 0 && (
        <div className={styles.payment}>
          <p>
            <span className={styles.titel}>Total Items: </span>
            {state.itemCounter}
          </p>
          <p>
            <span className={styles.titel}>Total Price: </span>
            {state.total} $
          </p>
          <div className={styles.buttonBoxs}>
            <button  className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
            <button className={styles.checkout} onClick={() => dispatch(checkOut())}>
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>check out succesfully</h3>
          <Link to="/products">Buy more?</Link>
        </div>
      )}
      {!state.checkout && state.itemCounter === 0 && (
        <div className={styles.complete}>
          <h3>want to buy?</h3>
          <Link to="/products">Go Back shopping</Link>
        </div>
      )}
    </div>
  )
}

export default ShopCart
