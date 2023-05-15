import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';

export default function Week10() {
  return (
    <div>
      <Head>
        <title>PS70 Portfolio: Week 10</title>
      </Head>
      <Header image="https://i.imgur.com/H9H5keg.jpg" title="Week 10" />

      <div className={styles.content}>
        <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
            <div className={styles.section}>
              Machine Building
            </div>
            <div className={styles.text}>
              <p>This week, we worked in groups to create a "Sidewalk Plotter" device that draws outside!</p>
              <p>Personally, I focused on the software aspects of the robot. In particular, I created the frontend site where users can create a design, as well as the backend server that converts coordinates into instructions for the robot.</p>
              <p>For more details on our team's robot building process, check out the consolidated documentation on Geoff's website!</p>
              <a href="https://geometrikz.github.io/PS70/blog/week_10/" target="_blank">
                <button className={styles.button}>Full Documentation</button>
              </a>
            </div>
            <div className={styles.section}>
              Final Project Work
            </div>
            <div className={styles.text}>
              <p>Our individual assignment this week was to produce a minimum viable product for our final project. For more details on this process, check out my final project documentation:</p>
            </div>
            <Link href="/finalproject#SoftwareSystem">
              <button className={styles.button}>Week 10 Progress</button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
