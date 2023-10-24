import Link from 'next/link'
import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copy}>
     © 2023 ODS, Inc.</div>
     <div className={styles.socials}>
    <Link href="/" className={styles.social}><Image width={25} height={25} src="/fb1.png" alt="fb"/> </Link>
    <Link href="/" className={styles.social}><Image width={25} height={25} src="/insta.jpg" alt="fb"/></Link>
    <Link href="/" className={styles.social}><Image width={25} height={25} src="/twitter.png" alt="fb"/></Link>
     </div>
    </div>
  )
}

export default Footer
