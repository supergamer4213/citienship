import { collection, doc, getDocs, docs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Share from "../utils/shares";
import Link from "next/link";
import { list } from "firebase/storage";
import captura from "../public/Captura de pantalla (343).png"
var books = []
export default function all(props) {
    
    return (
        <div>
            <Head>
            <title>Shere App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Exo:wght@800&display=swap" rel="stylesheet"/>
            </Head>
       <video playsInline autoPlay muted loop className={styles.video1} poster={captura}>
       <source src="/video.mp4" type="video/mp4"/>
       </video>
         <ul className={styles.container}>
         <Link href="/">
        <li><h4 className={styles.logo}>Earth Share</h4></li>
        </Link>
        <li><h4 className={styles.About}>About the website</h4></li>
        <Link href="/all">
        <h4 className={styles.Share}>Share</h4>
        </Link>
        </ul>
        <h1 className={styles.text1}>
       Help by
       Sharing <br />
       Awareness
        </h1>
        <div className={styles.pizza}>
        <Share />
        <ul className={styles.block}>
        
        {props.books.map(list => 
        <li key={list.Title} className={styles.links}><a href={list.Title} target="_blank" rel="noreferrer">{list.name}</a></li>
        )}
        </ul>
        </div>
        </div>
    )
}

export async function getServerSideProps() {
    await getDocs(collection(db, "users")).then((snapshot) => {
        books = []
        snapshot.docs.forEach((doc) =>{
            books.push({...doc.data()})
        })
        console.log(books)
    })
    .catch(err =>{
        console.log(err.message)
    })

    return {
      props : {books}
    }
  }
