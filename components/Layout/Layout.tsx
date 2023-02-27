import React from 'react'
import Navbar from '../NavBar/Navbar'

import styles from './layout.module.css'

interface Props{
    children:React.ReactNode
}

const Layout :React.FC<Props> = ({children}) => {
  return (
    <div className={styles.contLayout}>
      <Navbar />
        {children}
      <footer>footer!</footer>
    </div>
  )
}

export default Layout
