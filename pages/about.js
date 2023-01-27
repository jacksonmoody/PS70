import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Container from '@mui/material/Container';
import Script from 'next/script'

export default function About() {
  return (
    <>
    <div className={styles.main}>
      <Head>
        <title>PS70 Portfolio: About</title>
      </Head>
      <Header image="https://i.ibb.co/S517XpH/gradient-dark-blue-futuristic-digital-grid-background.jpg" title="About Me" />

      <Container maxWidth="sm">

        <div className={styles.section}>
          Overview
        </div>

        <div className={styles.text}>
          <p>Hi, I'm Jackson! I'm currently a freshman at Harvard College studying Mechanical Engineering and Computer Science.</p>
          <p>While I was born just a few minutes from Harvard, I have lived most of my life in Boulder, Colorado. When I'm not grinding over psets, you can probably find me skiing, biking, or <span>&#40;</span> badly <span>&#41;</span> playing the piano. </p>
          <p>At Harvard, I am also a member of <a href="https://socialgood.hcs.harvard.edu/" target="_blank" className={styles.link}>Tech for Social Good</a>, <a href="https://hces.seas.harvard.edu/" target="_blank" className={styles.link}>Harvard College Engineering Society</a>, various theater productions, and a bunch of other random clubs lol. I also love to make things, and I am super excited to be in PS70 this semester!</p>
        </div>

        <Link href="/">
          <button className={styles.button}>Return Home</button>
        </Link>

      </Container>
    </div>
    </>
  )
}
