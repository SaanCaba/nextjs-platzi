import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
// import { loadDataAvo } from "pages";
import React, { useEffect, useState } from "react";
import { TProduct } from "../database/models/product.model";

export const getServerSideProps = async (context) => {
  try {
    let result =  await fetch('https://nextjs-platzi-ten.vercel.app/api/avo/' + context.params.id)
    let response = await result.json()
    let avo = response.data
    return {
      props:{
        avo
      }
    } 
  } catch (error) {
    console.log(error)
    return error.message
  }
}

// // para rutas dinámicas.
// export const getStaticPaths = async () => {
//   // const response = await fetch(process.env.API_HOST)
//   // const result = await response.json()
//   // const avoList: TProduct[] = result.data

//   const avoList = await loadDataAvo()

//   // sacamos todos los paths
//   const avoPaths = avoList.map((e : TProduct)=> {
//     return{
//       params :{
//         id:  e.id
//       }
//     }
//   })

//   return{
//     paths: avoPaths,
//     // nos genera un 404,  con todos los paths inexistentes
//     fallback: false
//   }
// }

// export async function loadDataDetail(id:any){
//   const response = await fetch(process.env.API_HOST + id)
//   const result = await response.json()
//   return result.data
// }

// export const getStaticProps : GetStaticProps = async (context) => {
//   // const response = await fetch(process.env.API_HOST + context.params.id)
//   // const result = await response.json()
//   // const avo = result.data

//   const avo = await loadDataDetail(context.params.id)
  
//   return {
//     props:{
//       // tiene que ser el mismo nombre que lo que el componente recibe por prop.
//       avo
//     }
//   }
// }

interface Props {
  avo: TProduct
}

function ProductItem({avo}: Props) {

  return <div>
    {
      avo.name.length > 0 ? (
        <div>
        <Image width={300} height={300} src={avo.image} alt={avo.name} />
        <h1>{avo.name}</h1>
        <div style={{
          width:'70%'
        }}>
          <p>{avo.attributes.description}</p>
        </div>
        <p
        style={{
          color:'green',
          fontWeight:'bold'
        }}
        >$ {avo.price}</p>
        </div>
      ) : <h1>Cargando...</h1>
    }
  </div>;
}

export default ProductItem;
