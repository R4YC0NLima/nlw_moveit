import Head from 'next/head';

import styles from '../assets/css/pages/Home.module.css'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | MoveIt</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
