import React from 'react'
import styles from "./forseller.module.css"
import Swipermain from "../swiper/page"
import Marqueee from "../marquee/marquee"


function page() {
  return (
    <div>
      <h1 className={styles.ctitle}>Category1</h1>
       <div className={styles.swiper}>
    <Swipermain />
    </div><h1 className={styles.ctitle}>Category2</h1>
    
    <Marqueee/>
    </div>
  )
}

export default page








