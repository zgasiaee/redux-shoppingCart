import React from 'react'
import { Link, useParams } from 'react-router-dom'

//redux
import { useSelector } from 'react-redux'

//Style
import styles from './ProductDetails.module.css'

const ProductDetails = () => {
  
  const params = useParams()
  const id = params.id
  const data = useSelector((state) => state.productsState.products)
  const product = data[id - 1]
  const { image, title, description, price, category } = product

  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt="products" />
      <div className={styles.boxInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          {' '}
          Category: <span> {category}</span>{' '}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link className={styles.back} to="/products">
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
