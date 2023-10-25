import Link from 'next/link'
import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copy}>
     <h5>© 2023 ODS, Inc.</h5></div>
     <div className={styles.socials}>      
      <h3 className={styles.sociallinks} >Social Links</h3>
     <div > 
    <Link href="/" className={styles.social}><Image width={25} height={25} src="/fb1.png" alt="fb"/> </Link>
    <Link href="/" className={styles.social}><Image width={25} height={25} src="/insta.jpg" alt="fb"/></Link>
    <Link href="/" className={styles.social}><Image width={25} height={25} src="/twitter.png" alt="fb"/></Link>
     </div></div>
    </div>
  )
}

export default Footer
