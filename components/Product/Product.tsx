import { TProduct } from 'database/models/product.model'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './product.module.css'

interface Props{
    product:TProduct
}

function Product({product}:Props) {

    const router = useRouter()

    const onGoDetail = (id:string) => {
        router.push('/' + id)
    }

  return (
    <div className={styles.contProduct}>
        <div onClick={() => onGoDetail(product.id)} className={styles.contProductCol}>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.contImg}>
            <Image className={styles.imgProduct} width={280} height={280} alt={product.name} src={product.image} />
            </div>
            <h3 className={styles.price}>${product.price}</h3>
        </div>
    </div>
  )
}

export default Product
