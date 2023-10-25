import Image from "next/image";
import Homebanner from "/public/homeimg111.png"
import styles from "./page.module.css"
import Link from "next/link";
import Button from "@/components/button/Button";
import Appbanner from "/public/picture22.png";
import Appstore from "/public/appstore.jpg";
import Playstore from "/public/playstore.jpeg";

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
      <Button url="forseller" text="For Customer"/>
      <Button url="forbuyer" text="For Partner"/>
      
    </div>
    </div>
    <div className={styles.item}>
      <Image src={Homebanner} alt="herobanner"className={styles.hero}/>
    </div>
    </div>
    <h1 className={styles.downloadheader}>DOWNLOAD OUR APP</h1>
    <div className={styles.container}> 
       
      <div className={styles.appitem}>
        <div className={styles.appfeatures}>
        <h1 >App Features</h1></div>
        <div className={styles.appfeaturesli}><ul>
          <li>Neque porro quisquam est </li>
          <li>Neque porro quisquam est </li>
          <li>Neque porro quisquam est </li>
          <li>Neque porro quisquam est </li>
          <li>Neque porro quisquam est </li>
        </ul></div>
      <Image src={Appbanner} alt="herobanner"className={styles.apphero}/>
      
   </div>
      <div className={styles.item}>
      <h1 className={styles.apptitle}>DOWNLOAD IT TODAY ON</h1>
      <div className={styles.appitem}>
      <Image src={Playstore} alt="dwn"className={styles.applogo}/>
      <Image src={Appstore} alt="dwn"className={styles.applogo}/>
    </div>
      
    </div>
    
    </div>
    
    </div>
  )
}
