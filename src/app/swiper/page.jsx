"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import sw1 from "../../../public/sw1.jpg"
import sw2 from "../../../public/sw2.jpg"
import sw3 from "../../../public/sw3.jpg"
import sw4 from "../../../public/sw4.jpg"
import sw5 from "../../../public/sw5.jpg"
import sw6 from "../../../public/sw6.jpg"
import styles from "./page.module.css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export default function Swipermain(){
  return (
    <Swiper    
    cssMode={true}
    navigation={true}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    className="mySwiper"  
      spaceBetween={10}
      slidesPerView={2}
    >
    
      <SwiperSlide><div className={styles.main}>
    <div style={{backgroundColor:"#3a0324"}} className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>"Neque porro quisquam, adipisci velit..."</h1>
      <p className={styles.disc}> Is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      </div>
    <div className={styles.item}>
      <Image src={sw1} alt="swipper1"className={styles.image}/>
    </div>
    </div>
    </div></SwiperSlide>
    <SwiperSlide><div className={styles.main}>
    <div style={{backgroundColor:"#01342a"}} className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>"Neque he industry's standar adipisci velit..."</h1>
      <p className={styles.disc}> Is d dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      
    </div>
    <div className={styles.item}>
      <Image src={sw2} alt="swipper2"className={styles.image}/>
    </div>
    </div>
    </div></SwiperSlide>
    <SwiperSlide><div className={styles.main}>
    <div style={{backgroundColor:"#054a01"}} className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>"Neque he industry's standar adipisci velit..."</h1>
      <p className={styles.disc}> Is d dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      
    </div>
    <div className={styles.item}>
      <Image src={sw3} alt="swipper3"className={styles.image}/>
    </div>
    </div>
    </div></SwiperSlide>
    <SwiperSlide><div className={styles.main}>
    <div style={{backgroundColor:"#0c033a"}} className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>"Neque he industry's standar adipisci velit..."</h1>
      <p className={styles.disc}> Is d dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      
    </div>
    <div className={styles.item}>
      <Image src={sw4} alt="swipper4"className={styles.image}/>
    </div>
    </div>
    </div></SwiperSlide>
    <SwiperSlide><div className={styles.main}>
    <div style={{backgroundColor:"darkgreen"}} className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>"Neque he industry's standar adipisci velit..."</h1>
      <p className={styles.disc}> Is d dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      
    </div>
    <div className={styles.item}>
      <Image src={sw5} alt="swipper5"className={styles.image}/>
    </div>
    </div>
    </div></SwiperSlide>
    <SwiperSlide><div className={styles.main}>
    <div style={{backgroundColor:"orange"}} className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>"Neque he industry's standar adipisci velit..."</h1>
      <p className={styles.disc}> Is d dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      
    </div>
    <div className={styles.item}>
      <Image src={sw6} alt="swipper6"className={styles.image}/>
    </div>
    </div>
    </div></SwiperSlide>
      
    </Swiper>
  );
};