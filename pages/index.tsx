import { BorderAllRounded } from '@material-ui/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Board from '../containers/Board'
import compass from '../components/compass.png'
import hoover from '../components/hoover.png'
// import smalltalk from 'smalltalk/module'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>iHoover</title>
        <meta name="description" content="Created by Omar Seba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="app" className={styles.main}>
        <div className="container">
            <div className="hoover">
              <Image src={hoover}></Image>
            </div>
            <div className="text">
            <h1>iHoover</h1>
            </div>
            <div className="compass">
              <Image src={compass}></Image>
            </div>
        </div>
        <Board/>
      </main>

      
    </div>
  )
}

export default Home
