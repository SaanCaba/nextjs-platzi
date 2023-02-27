import Product from '@components/Product/Product'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { TProduct } from "../database/models/product.model"
import styles from './index.module.css'

// export const getServerSideProps = async () => {
 
//   const response = await fetch('http://localhost:3000/api/avo')
//   const result = await response.json()
//   const avoList: TProduct[] = result.data
  
//   return {
//     props:{
//       // tiene que ser el mismo nombre que lo que el componente recibe por prop.
//       avoList
//     }
//   }
// }

export async function loadDataAvo(){
  const response = await fetch(process.env.API_HOST)
  const result = await response.json()
  return result.data
}


export const getStaticProps = async () => {
 
  // const response = await fetch(process.env.API_HOST)
  // const result = await response.json()
  const avoList: TProduct[] = await loadDataAvo()
  
  return {
    props:{
      // tiene que ser el mismo nombre que lo que el componente recibe por prop.
      avoList
    }
  }
}



interface Props{
  avoList: TProduct[]
}

export default function Home({avoList}:Props) {
  // const [avo, setAvos] = useState<TProduct[]>([])
  useEffect(() => {
    console.log(avoList)
  }, [])
  return (
    <div className={styles['container-products']}>
      {
        avoList.length > 0 && avoList.map(e => {
          return(
            <Product key={e.id} product={e} />
          )
        })
      }
    </div>
  )
}
