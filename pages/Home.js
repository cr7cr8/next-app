import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Button } from "@mui/material"
import React, { useContext, useEffect } from "react"



import { Context, ContextProvider } from "../ContextProvider"

import Link from "next/link"
import axios from "axios"
import { useRouter } from 'next/router';

import myImageSrc from "../public/vercel.svg";


// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { ttt: 1 } }, { params: { ttt: 2 } }

//     ],
//     fallback: false // false or 'blocking'
//   };
// }

export async function getStaticProps(context) {


  //const { params, query } = context


  console.log("HOME========", context)

  return {
    props: {},
    revalidate: 10
  }
 
}




export default function Home() {


  const { count, setCount } = useContext(Context)
  const router = useRouter();

  return (

    <div className={styles.container}>

      <Button onClick={function () {
        axios.delete("/api/usercookie").then(response => {

          router.replace("/")
        })
      }}>Delete Cookie</Button>






      <Link href="/About"><h1>go to about {count}</h1></Link>
      <Button onClick={function () {
        setCount(pre => pre + 1)
      }}>add</Button>


      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            {/* <img src={ myImageSrc.src  } style={{width:100,height:100}} /> */}
          </span>
        </a>
      </footer>
    </div>

  )
}
