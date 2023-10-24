"use client"
import React from 'react'
import Marquee from "react-fast-marquee";
import styles from "./marquee.module.css"
import Image from 'next/image';
import mq1 from "../../../public/mq1.jpg"
import mq2 from "../../../public/mq2.jpg"
import mq3 from "../../../public/mq3.jpg"
import mq4 from "../../../public/mq4.jpg"
import mq5 from "../../../public/mq5.jpg"
import mq6 from "../../../public/mq6.jpg"
import mq7 from "../../../public/mq7.jpg"
import mq8 from "../../../public/mq8.jpg"
import mq9 from "../../../public/mq9.jpg"


export default function Marqueee() {
  return (
    <div className='marquee'>
      <Marquee style={{marginLeft:"20px"}}>
       
    <div className={styles.postcard}>
    <Image src={mq1} alt='sw3'className={styles.image}/>
    <p>Image 1 Description</p>
    </div>
    <div className={styles.postcard}>
    <Image src={mq2} alt='sw3'className={styles.image}/>
    <p>Image 2 Description</p>
    </div>
    <div className={styles.postcard}>
    <Image src={mq3} alt='sw3'className={styles.image}/>
    <p>Image 3 Description</p>
    </div>
    <div className={styles.postcard}>
    <Image src={mq4} alt='sw3'className={styles.image}/>
    <p>Image 4 Description</p>
    </div>
    <div className={styles.postcard}>
    <Image src={mq5} alt='sw3'className={styles.image}/>
    <p>Image 5 Description</p>
    </div>
    <div className={styles.postcard}>
    <Image src={mq6} alt='sw3'className={styles.image}/>
    <p>Image 6 Description</p>
    </div><div className={styles.postcard}>
    <Image src={mq7} alt='sw3'className={styles.image}/>
    <p>Image 7 Description</p>
    </div>
    <div className={styles.postcard}>
    <Image src={mq8} alt='sw3'className={styles.image}/>
    <p>Image 8 Description</p>
    </div>
    <div className={styles.postcard}>
    <Image src={mq9} alt='sw3'className={styles.image}/>
    <p>Image 9 Description</p>
    </div>
     
    </Marquee>
    </div>
  )}