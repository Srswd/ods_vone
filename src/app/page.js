import Image from "next/image";
import Homebanner from "/public/homeimg.png"
import styles from "./page.module.css"
import Swipermain from "../app/swiper/page"
import Marqueee from "../app/marquee/marquee"
import Link from "next/link";

function onclick(){
  <Link href="/forbuyer"/>
}

export default function Home() {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>"Neque porro quisquam est qui dolorem ipsum quia dtetur, adipisci velit..."</h1>
      <p className={styles.disc}> Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      <div className={styles.buttons}>
      <button className={styles.button}>For Customers</button>
      <button className={styles.button}>For Partners</button>
    </div>
    </div>
    <div className={styles.item}>
      <Image src={Homebanner} alt="herobanner"className={styles.hero}/>
    </div>
    </div>
    </div>
  )
}
