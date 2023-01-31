import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import headshot from '../public/images/headshot.jpg';
import skiing from '../public/images/skiing.jpg';

export default function About() {
  return (
    <div>
      <Head>
        <title>PS70 Portfolio: About</title>
      </Head>
      <Header image="https://i.ibb.co/QcnymSY/Screenshot-2023-01-27-at-1-30-42-AM.jpg" title="About Me" />

      <div className={styles.content}>
        <Grid container alignItems="flex-start" justifyContent="center" paddingLeft={15} paddingRight={15} paddingTop={10}>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
            <div className={styles.section}>
              Welcome!
            </div>
          </Grid>
          <Grid item xs={12} sm={8} order={{ xs: 3, sm: 2 }}>
            <div className={styles.text}>
              <p>My name is Jackson Moody, and I'm a freshman at Harvard College studying Mechanical Engineering and Computer Science.</p>
              <p>While I was born just a few minutes from Harvard, I have lived most of my life in Boulder, Colorado. When I'm not grinding over psets, you can probably find me skiing, biking, or <span>&#40;</span>badly<span>&#41;</span> playing the piano. </p>
              <p>At Harvard, I am also a member of <a href="https://socialgood.hcs.harvard.edu/" target="_blank" className={styles.link}>Tech for Social Good</a>, <a href="https://hces.seas.harvard.edu/" target="_blank" className={styles.link}>Harvard College Engineering Society</a>, <a href="https://www.harvardaadt.org/" target="_blank" className={styles.link}>The Asian American Dance Troupe</a>, various theater productions, and a bunch of other random clubs lol.</p>
              <p>Of course, I love to make things—ranging from 3D printed trinkets to laser cut ornaments. I can't wait to be in PS70 this semester!</p>
            </div>

            <Link href="/">
              <button className={styles.button}>Return Home</button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} order={{ xs: 2, sm: 3 }}>
            <div className={styles.circle}>
              <Image src={headshot} alt="Headshot" width={300} />
            </div>
            <div className={styles.circle}>
              <Image src={skiing} alt="Skiing" width={350} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
