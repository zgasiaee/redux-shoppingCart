import React, { useEffect } from 'react'

//Styles
import styles from './Store.module.css'

//gif
import spinner from '../../assets/gif/Spinner.gif'

//redux
import { useDispatch, useSelector } from 'react-redux'
import fetchProducts from '../../redux/products/productsAction'

//component
import Product from '../product/Product'

const Store = () => {

  const dispatch = useDispatch()
  const productsState = useSelector((state) => state.productsState)

  useEffect(() => {
     if (!productsState.products.length) dispatch(fetchProducts())
  }, [])

  return (
    <div className={styles.container}>
      {productsState.loading ? (
        <div style={{ textAlign: 'center', width: '100%' }}>
          <img src={spinner} />
        </div>
      ) : productsState.error ? (
        <span>{productsState.error}</span>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productsData={product} />
        ))
      )}
    </div>
  )
}

export default Store
