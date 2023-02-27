import Link from "next/link";
import React from "react";

import styles from './navbar.module.css'

function Navbar() {
  return <div className={styles.contNavBar}>
    <nav>
        <menu className={styles.contMenu}>
            <Link className={styles.titleNavBar} href='/'>home</Link>
            <Link className={styles.titleNavBar} href="/about">about</Link>
            <Link className={styles.titleNavBar} href="/eattoday">Can i eat a avocato?</Link>
        </menu>
    </nav>
  </div>;
}

export default Navbar;
