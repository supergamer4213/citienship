import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import cascada from "../public/Cascada.jpg"

export default function Home() {
  return (
    <div>
        <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@800&display=swap" rel="stylesheet"/>
      </Head>
     <video playsInline autoPlay muted loop className={styles.video}>
       <source src="/Earth.mp4" type="video/mp4"/>
     </video>
     <ul className={styles.container}>
     <Link href="/">
      <li><h4 className={styles.logo}>Earth Share</h4></li>
      </Link>
      <li><h4 className={styles.About}>About the website</h4></li>
      <Link href="/all">
      <button><h4 className={styles.Share}>Share</h4></button>
      </Link>
     </ul>
     <h1 className={styles.text}>
       Help Create <br />
       Awareness
     </h1>
     {/*<div className={styles.cascada}>
     <div className={styles.cascadas}>
     <Image 
     src ={cascada}  
     width = {400}
     height = {500}
     />
     </div>
  </div>*/}
     </div>
  )
}
