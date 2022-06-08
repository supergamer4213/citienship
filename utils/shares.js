import { collection, doc, addDoc } from "firebase/firestore";
import {db} from "./firebaseConfig";
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import Head from "next/head";

export default function Share(){


    return(
        <div >
        <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@800&display=swap" rel="stylesheet"/>
      </Head>
        <h1 className={styles.add}>Add
        Your Own</h1>
        <form id="form" onSubmit={submits}>
        <input type="text" id="Title" placeholder="Title of article" className={styles.input}/>
        <input type="text" id="name" placeholder="Complete link" className={styles.input1}/>
        <input type="submit" className={styles.input2}/>
        </form>
        </div>
    )
}
const submits = async (event) => {
    event.preventDefault();
    var link = event.target.name.value;
    var title = event.target.Title.value;
    await addDoc(collection(db, "users"), {
        Title: link,
        name: title,
      });
    Router.reload(window.location.Shares)
      

}
