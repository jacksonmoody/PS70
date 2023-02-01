import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import reactImage from '../public/images/react.png';
import nextImage from '../public/images/next.png';
import proposal1 from '../public/images/proposal1.png';
import proposal2 from '../public/images/proposal2.png';    

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
                            Final Project Proposals
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 6, sm: 5 }}>
                        <div className={styles.text}>
                            <h2>Option 1: Wake Up Manager</h2>
                            <p>The first project that I am considering making is an automated wake up system. As a very deep sleeper, I oftentimes sleep through my alarm, and I am in need of a more comprehensive solution. Much like an alarm clock, this project would have a speaker component that would play loud noises at a certain time to wake you up. However, unlike an alarm clock, the system would also be smarter—connected to a stepper motor to open the blinds and let in natural sunlight, an IoT board <span>&#40;</span>like an Arduino<span>&#41;</span> so that the speaker can tell me important information like the weather, and maybe even a small water pump to spray me if I don't shut off the alarm.</p>
                            <p>This project would be somewhat similar to other "smart alarm clock" solutions such as <a href="https://allisonktu.github.io/PS70/01_intro/index.html" target="_blank" className={styles.link}>Allison's Smart Alarm Clock</a>, <a href="https://allisonktu.github.io/PS70/01_intro/index.html" target="_blank" className={styles.link}>The Loftie Clock Smart Sleep Assistant</a>, and even <a href="https://www.amazon.com/Echo-Alarm-Clock/s?k=Echo+Alarm+Clock" target="_blank" className={styles.link}>Amazon Alexa Devices</a>. However, my project would connect to significantly more external components than these other solutions, and would thus give me plenty of opportunities to explore new technologies and ideas!</p>
                            <br />
                            <h2>Option 2: Plant Automation System</h2>
                            <p>Alternatively, I could create a plant automation system to keep my plants alive. Indeed, while my mom gave me two plants at the beginning of the school year, I managed to kill both last semester 😭 As a result, I am in need of a more automated solution. Such a system could, for instance, monitor the moisture levels in the soil using a sensor as well as the amount of sunlight the plant is receiving. It could then drive motors to pump water into the plant or open the blinds nearby, respectively. As a stretch goal, I could also connect this system to the internet so that I could monitor the plant's wellbeing remotely.</p>
                            <p>However, this project is one which has already been done numerous times—in <a href="https://ninakchung.github.io/PHYSCI-70/11_final/index.html" target="_blank" className={styles.link}>Nina's Automatic Plant Waterer</a>, this <a href="https://www.amazon.com/Automatic-Watering-Programmable-Waterproof-Distribution/dp/B09475MXLX" target="_blank" className={styles.link}>automatic plant waterer for potted plants</a>, and this <a href="https://sageandsill.com/products/smart-plant-moisture-light-nutrient-and-temperature-sensor?variant=39659349737669&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAiAuOieBhAIEiwAgjCvciRT8KL46BpfS5g027IcM2sadLqCSZ3nQtp2aA3CiJgvbVMFxeD8gRoCKWoQAvD_BwE" target="_blank" className={styles.link}>smart plant water meter and health sensor</a>. While my project would have <em>some</em> unique components <span>&#40;</span>such as automated blind control<span>&#41;</span>, I am leaning towards the first option due to its novelty.</p>
                        </div>
                        <Link href="/">
                            <button className={styles.button}>Return Home</button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 5, sm: 6 }}>
                        <div className={styles.rectangle}>
                            <Image src={proposal1} alt="Diagram 1" fill style={{ objectFit: "contain" }}/>
                        </div>
                        <div className={styles.rectangle}>
                            <Image src={proposal2} alt="Diagram 2" fill style={{ objectFit: "contain" }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
