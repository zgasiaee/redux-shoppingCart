import React from 'react'
import { Link } from 'react-router-dom'

//redux
import { useSelector } from 'react-redux'

//Icon
import shopIcon from '../../assets/icon/shop.svg'

//Styles
import styles from './Navbar.module.css'

const Navbar = () => {
  const state = useSelector((state) => state.cartState)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
        <div className={styles.cart}>
          <Link to="/cart">
            <img src={shopIcon} alt="shop" />
          </Link>
          <span className={styles.counter}>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
