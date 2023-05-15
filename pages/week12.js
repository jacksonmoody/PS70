import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';

export default function Week12() {
  return (
    <div>
      <Head>
        <title>PS70 Portfolio: Week 12</title>
      </Head>
      <Header image="https://i.imgur.com/nbnH9S9.jpg" title="Week 12" />

      <div className={styles.content}>
        <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
            <div className={styles.section}>
              Project Integration
            </div>
            <div className={styles.text}>
              <p>This week, I focused on building the blind opening and water spraying portions of my final project. For more details, check out my final project documentation below:</p>
              <Link href="/finalproject#MotorSystem">
                <button className={styles.button}>Week 12 Progress</button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
