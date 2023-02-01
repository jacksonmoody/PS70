import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import reactImage from '../public/images/react.png';
import nextImage from '../public/images/next.png'

export default function Week1() {
    return (
        <div>
            <Head>
                <title>PS70 Portfolio: Week 1</title>
            </Head>
            <Header image="https://i.imgur.com/TpPyGBy.jpeg" title="Week 1" />

            <div className={styles.content}>
                <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{marginTop: 5}}>
                    <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
                        <div className={styles.section}>
                            Website Development
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 3, sm: 2 }}>
                        <div className={styles.text}>
                            <p>This week, I worked on developing a website to document my progress through this course. Having worked pretty extensively with website development in the past, I chose to develop this website using React.js and Next.js <span>&#40;</span>as opposed to with the standard HTML/CSS templates provided in class<span>&#41;</span>.</p>
                            <p>In doing so, I have been able to create a much more modular and scalable design. With React, I created components for every page and for certain aspects <span>&#40;</span>such as header images<span>&#41;</span> which are frequently repeated—thereby allowing me to minimize the amount of code which is copied and pasted. Moreover, with Next, I have been able to manage routing, image optimization, and a variety of other important aspects to creating a functional website. </p>
                            <p>Indeed, while this method was probably more time consuming than simply modifying the provided templates, I think the results have been pretty rewarding!</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 2, sm: 3 }}>
                        <div className={styles.square}>
                            <Image src={reactImage} alt="React.js" fill style={{ objectFit: "cover" }}/>
                        </div>
                        <div className={styles.square}>
                            <Image src={nextImage} alt="Next.js" fill style={{ objectFit: "cover" }}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 4, sm: 4 }}>
                        <div className={styles.section}>
                            Final Project Proposal
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 6, sm: 5 }}>
                        <div className={styles.text}>
                            <h2>Option 1: Wake Up Manager</h2>
                            <p>This is where I will describe option 1!</p>
                            <br />
                            <h2>Option 2: Plant Automation System</h2>
                            <p>This is where I will describe option 2!</p>
                        </div>
                        <Link href="/">
                            <button className={styles.button}>Return Home</button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 5, sm: 6 }}>
                        <div className={styles.square}>
                            <Image src={reactImage} alt="React.js" fill style={{ objectFit: "cover" }}/>
                        </div>
                        <div className={styles.square}>
                            <Image src={nextImage} alt="Next.js" fill style={{ objectFit: "cover" }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
