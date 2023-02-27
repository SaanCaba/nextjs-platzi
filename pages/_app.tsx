import { AppProps } from "next/app";
import  Head  from "next/head";
import React from "react";
import Layout from "../components/Layout/Layout";

import './styles/global.css'

export function reportWebVitals(metric){
  console.log(metric)
}

export default function MyApp({ Component, pageProps }:AppProps) {
    console.log('pepe')
    return <>
    <Head>
        <title>Home</title>
        <link rel="shortcut icon" href="#"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </> 
  }