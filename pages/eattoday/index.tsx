import React, { useState, useEffect } from 'react'

import styles from './eattoday.module.css'

function index() {

    const [random, setRandom] = useState<number>(0)
  
    const getRandomNum = () => {
        const random = Math.floor(Math.random() * 1 * 1000)
       return setRandom(random)
    }

    useEffect(() => {
        getRandomNum()
        return () => {
            setRandom(0)
        }
    },[])

    return (
    <div className={random === 0 ? styles.displayNone : styles.contEatToday}>
        <div className={styles.contEatTodayCol}>
            <div>
                <h1 className={styles.titleAvo}>Can i eat avocato now?</h1>
            </div>
            <div>
                <h1 className={ random % 2 === 0 ? styles.positive :  styles.negative}>
                    {random % 2 === 0 ? 
                    "YES!! IS MOMENT TO EAT ONE AVOCATO."
                    : "it's no the time to eat one."
                    
                }
                </h1>
            </div>
      </div>
    </div>
  )
}

export default index
