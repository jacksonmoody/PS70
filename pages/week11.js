import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';

export default function Week11() {
  return (
    <div>
      <Head>
        <title>PS70 Portfolio: Week 11</title>
      </Head>
      <Header image="https://i.imgur.com/tYkNIiE.jpg" title="Week 11" />

      <div className={styles.content}>
        <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
            <div className={styles.section}>
              Computer Programming
            </div>
            <div className={styles.text}>
              <p>This week in class, we focused on computer programming and connecting our ESP32s to the internet!</p>
              <p>Outside of class, I focused on building the alarm clock portion of my final project. For more details, check out my final project documentation below:</p>
              <Link href="/finalproject#AlarmSystem">
                <button className={styles.button}>Week 11 Progress</button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
