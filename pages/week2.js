import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import week2project from '../public/images/week2project.jpg';
import organizer1 from '../public/images/organizer1.jpeg';
import organizer2 from '../public/images/organizer2.jpeg';
import lego1 from '../public/images/lego2.jpg';
import vase from '../public/images/vase.jpg';
import pencilImage from '../public/images/pencil.jpg';

export default function Week2() {
    return (
        <div>
            <Head>
                <title>PS70 Portfolio: Week 2</title>
            </Head>
            <Header image="https://i.imgur.com/ehaB0tz.jpg" title="Week 2" />

            <div className={styles.content}>
                <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
                    <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
                        <div className={styles.section}>
                            Press-Fit Construction Kit
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 3, sm: 2 }}>
                        <div className={styles.text}>
                            <p>After learning to use Fusion 360 to export DXF files for laser cutting, I decided to take the in-class activity of creating a press-fit kit to the next level by creating a modular organizational system for my desk. Indeed, my current setup is quite disorganized, and I have always wanted to buy draw dividers to seperate different components. However, this assignment seemed like the perfect opportunity to make some of my own! </p>
                            <p>To do so, I used the sketch tool in Fusion to outline a rectangular shape. I then created construction lines at the midpoints of the rectangle so as to have references as to where to place the notches. Using the rectangle tool again, I cut away or added rectangular notches at each of these reference points. The result was three distinct pieces <span>&#40;</span>a top, front, and side<span>&#41;</span> which could be used together to create a complete box. Due to symmetries in the design, you can use the three pieces to create as many six-piece boxes as you would like—the boxes will even link together!</p>
                            <p>This linking together of pieces and boxes is accomplished using custom notches. However, on my first attempt at the design, I failed to account for the kerf of the laser which made the notches too small and their corresponding holes too wide to create a tight fit. On my second attempt I resolved this issue, however, another issue with the focus of the laser caused the pieces to cut incorrectly. Finally, on my third attempt I did not run into any additional issues, and I was able to successfully create the press-fit desk organizers pictured here!</p>
                        </div>
                        <Link href="/files/pressKit.zip" locale={false}>
                            <button className={styles.button}>Download Files</button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 2, sm: 3 }}>
                        <div className={styles.square}>
                            <Image src={week2project} alt="Fusion 360 Model" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className={styles.square}>
                            <Image src={organizer2} alt="Draw Organizers" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className={styles.square}>
                            <Image src={organizer1} alt="Draw Organizers 2" fill style={{ objectFit: "cover" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 4, sm: 4 }}>
                        <div className={styles.section}>
                            Fusion 360 Tutorial
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 6, sm: 6 }}>
                        <div className={styles.text}>
                            <p>To become more comfortable with Fusion 360, I also followed an online tutorial that taught me to how to model a Lego brick. Though relatively simplistic, this tutorial covered sketching, dimensioning, extrusions, mirroring, patterns, shells, and more. Now that I have completed it, I certainly feel more comfortable with my 3D modeling skills!</p>
                        </div>
                        <Link href="https://www.youtube.com/watch?v=d3qGQ2utl2A" rel="noopener noreferrer" target="_blank">
                            <button className={styles.button}>View Tutorial</button>
                        </Link>
                        <Link href="/files/lego.stl" locale={false}>
                            <button className={styles.button}>Download Model</button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 5, sm: 5 }}>
                        <div className={styles.rectanglesmall}>
                            <Image src={lego1} alt="Lego 1" fill style={{ objectFit: "contain" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 7, sm: 7 }}>
                        <div className={styles.section}>
                            Fusion 360 Projects
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 9, sm: 8 }}>
                        <div className={styles.text}>
                            <h2>Project 1: Apple Pencil</h2>
                            <p>To further my 3D modeling experience, I was tasked with modeling two household objects. The first item that I chose to model was an Apple Pencil that I use with my iPad nearly everyday. Though seemingly simple, I was attracted by the flatness on one side of the pencil as well as the elegant transitions between the body of the pencil and the eraser/tip. Luckily, modeling the pencil proved to be relatively striaghtforward—I simply sketched the right side of the pencil and revolved it around a central axis to create a circular object. I then subtracted away a rectangular section to create the iconic flat part of the pencil. In completing this project, I learned that conceptualizing the 3D part and the best process to go about modeling it is oftentimes the hardest part. After you have a solid plan, the modeling itself can be relatively straightforward.</p>
                            <Link href="/files/pencil.stl" locale={false}>
                                <button className={styles.button}>Download Pencil</button>
                            </Link>
                            <br />
                            <h2>Project 2: Flower Pot</h2>
                            <p>After modeling the pencil, I felt prepared to move onto something more advanced: the flower pot currently sitting on my room. Given that one of my final project ideas is to create an automated plant watering system, I figured that modeling a pot for the plant could be a good first step. To do so, I used the technique of revolving a cross section about an axis that I learned with the Apple Pencil, and applied fillets, shells, and additional extursions to form the final part. While the final result doesn't exactly match the flower pot in my room, I am happy with the overall result!</p>
                            <p><span>&#40;</span>To practice creating assemblies, I also made a model of an Apple Pencil inside a flower pot. You can download it <Link href="/files/assembly.f3z" locale={false}>here</Link>.<span>&#41;</span></p>
                            <Link href="/files/vase.stl" locale={false}>
                                <button className={styles.button}>Download Pot</button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 8, sm: 9 }}>
                        <div className={styles.rectanglesmall}>
                            <Image src={pencilImage} alt="Pencil" fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.rectangle}>
                            <Image src={vase} alt="Vase" fill style={{ objectFit: "contain" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 10, sm: 10 }}>
                        <Link href="/">
                            <button className={styles.button}>Return Home</button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
