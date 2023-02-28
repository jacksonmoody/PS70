import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import scanresult from '../public/images/scanresult.jpg';
import proposal1 from '../public/images/proposal1.png';
import holder from '../public/images/holder.gif';
import holderResult from '../public/images/holderresult.jpg';
import scan from '../public/images/scan.jpeg';

export default function Week5() {
    return (
        <div>
            <Head>
                <title>PS70 Portfolio: Week 5</title>
            </Head>
            <Header image="https://i.imgur.com/9KR8YPD.jpg" title="Week 5" />

            <div className={styles.content}>
                <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
                    <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
                        <div className={styles.section}>
                            3D Printing
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 3, sm: 2 }}>
                        <div className={styles.text}>
                            <p>This week, we were tasked with 3D printing an object which could not be easily made using more traditional manufacturing methods.</p>
                            <p>Since the beginning of the year, our ensuite bathroom has been lacking a toilet paper holder. As a result, rather than placing our toilet paper in the proper spot, we placed it in various other places around our bathroom.</p>
                            <p>Noticing this, I decided to 3D print a toilet paper holder. Given that this part contains an inner sliding rod, as well as a spring to push the rod into the correct position, it seemed like a good candidate for 3D printing. To model the part, I simply extruded a cylinder of the appropriate length and offset an additional cylinder within this outer cylinder to slide in and out of the part. This way, I can insert toilet paper onto the rod then insert the rod onto the holder without the rod falling off.</p>
                            <p>To create this part, I started the print off hollow, paused it at a certain z-height to insert a spring, and then continued the print. While the continued print did droop a little due to the bridging necessary to span the spring, the result was printed all in one piece and was capable of functioning right off the printer! Now, it works great in our ensuite bathroom :<span>&#41;</span></p>
                        </div>
                        <Link href="/files/holder.f3d">
                            <button className={styles.button}>Download Model</button>
                        </Link>
                        <Link href="/files/holder.stl">
                            <button className={styles.button}>Download STL</button>
                        </Link>
                        <Link href="/files/holder.gcode">
                            <button className={styles.button}>Download G-Code</button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 2, sm: 3 }}>
                        <div className={styles.rectangle}>
                            <Image src={holder} alt="Holder GIF" fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.square}>
                            <Image src={holderResult} alt="Final Product" fill style={{ objectFit: "cover" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 4, sm: 4 }}>
                        <div className={styles.section}>
                            3D Scanning
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 6, sm: 5 }}>
                        <div className={styles.text}>
                            <p>Unfortunately, the 3D scanner that we were supposed to use for this week's assignment was not working correctly during our lab. However, as an alternative, I was able to download the <a href="https://apps.apple.com/us/app/polycam-lidar-3d-scanner/id1532482376" target="_blank" className={styles.link}>Polycam 3D scanning app</a> on my iPad.</p>
                            <p>This app uses photogrammetry techniques to construct a 3D model, meaning that you need to take lots of photos of the object you are scanning at various different angles to construct a complete model. After performing this process a couple of times, I quickly learned the importance of keeping the subject still during scanning. I also learned that the 3D scans would not be ready for 3D printing right out of the scanner. Instead, I ended up using <a href="https://meshmixer.com/" target="_blank" className={styles.link}>Meshmixer</a> and the "make solid" command to fill in any gaps in the scan before printing.</p>
                            <p>Ultimately, I chose to scan my friend Evan and 3D print him. While some detail was lost in his face and body, I think the overall result turned out pretty good!</p>
                        </div>
                        <Link href="/files/mesh.stl" locale={false}>
                            <button className={styles.button}>Download Model</button>
                        </Link>
                        <Link href="/files/mesh.gcode" locale={false}>
                            <button className={styles.button}>Download G-Code</button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 5, sm: 6 }}>
                        <div className={styles.rectanglexs}>
                            <Image src={scan} alt="Original Scan" fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.rectanglesmall}>
                            <Image src={scanresult} alt="Results of Scan" fill style={{ objectFit: "contain" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 7, sm: 7 }}>
                        <div className={styles.section}>
                            Final Project Details
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} order={{ xs: 9, sm: 8 }}>
                        <div className={styles.text}>
                            <h2>Bill of Materials</h2>
                            <p>While I haven't completely finalized the various aspects of my project, the following components will probably be necessary:</p>
                            <ul className={styles.list}>
                                <li>1 x <a href="https://www.amazon.com/SunFounder-Serial-Module-Display-Arduino/dp/B019K5X53O/" target="_blank" className={styles.link}>LCD Display</a> - For displaying the current time and/or the status of the alarm</li>
                                <li>1 x <a href="https://www.amazon.com/SunFounder-Serial-Module-Display-Arduino/dp/B019K5X53O/" target="_blank" className={styles.link}>LCD Display Driver</a> - For allowing the Arduino or ESP 32 to interface with the LCD display.</li>
                                <li>1 x <a href="https://www.amazon.com/HiLetgo-ESP-WROOM-32-Development-Microcontroller-Integrated/dp/B0718T232Z" target="_blank" className={styles.link}>Arduino Uno or ESP 32</a> - For controlling the logic of the system. That is, reading in inputs from the sensors and instructing the various output devices as appropriate.</li>
                                <li>1 x <a href="https://www.adafruit.com/product/1313?gclid=EAIaIQobChMIjtXv34K3_QIVhTizAB0mPA_BEAQYAyABEgLwEPD_BwE" target="_blank" className={styles.link}>Speaker</a> - For playing alarm noises</li>
                                <li>1 x <a href="https://www.digikey.com/en/products/detail/adafruit-industries-llc/1193/6817198" target="_blank" className={styles.link}>Push Button</a> - For silencing the alarm</li>
                                <li>1 x <a href="https://www.amazon.com/Amphibious-Circulation-Submersible-Fountain-Hydroponics/dp/B07T2BK2LF/" target="_blank" className={styles.link}>Water Pump</a> - For transporting water from a reservoir to the spray nozzle.</li>
                                <li>1 x <a href="https://www.amazon.com/Plastic-Sprinkler-Misting-Watering-Irrigation/dp/B07HH1XMX6/" target="_blank" className={styles.link}>Spray Nozzle</a> - For dispersing the water into a mist over the user.</li>
                                <li>1 x <a href="https://www.amazon.com/Greartisan-Electric-Reduction-Eccentric-Diameter/dp/B071XCX1LH/" target="_blank" className={styles.link}>DC Motor</a> - For moving the curtain blinds up and down.</li>
                                <li>1 x <a href="https://www.amazon.com/HiLetgo-H-bridge-Stepper-Controller-Arduino/dp/B00M0F243E" target="_blank" className={styles.link}>DC Motor Driver</a> - For allowing the Arduino or ESP 32 to drive the motor at the appropriate current/voltage.</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 8, sm: 9 }}>
                        <div className={styles.rectangle}>
                            <Image src={proposal1} alt="Diagram" fill style={{ objectFit: "contain" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 10 }}>
                        <div className={styles.text}>
                            <h2>Project Plan</h2>
                            <p>While I would ideally start preparing for this project as soon as possible, realistically I will not begin focusing on the project until the final four weeks of the course.</p>
                            <p><strong>Week 1:</strong> In the first week, I am planning on preliminary prototyping. That is, I will focus on using existing materials in the shop to test my ideas before utilizing any components that may have to be ordered in. In particular, I will probably focus on designing a mechanism to roll my window shade up and down using a singular motor, as well as a mechanism to attach a water resorvoir to a pump.</p>
                            <p><strong>Week 2:</strong> In the second week, I will begin assembling my final project. This will entail deciding on a layout for all of the components, milling or laser cutting a custom base for all of the components, 3D printing difficult geometries <span>&#40;</span>such as a custom motor mount or "blind holder"<span>&#41;</span>, and wiring all of the electircal components together.</p>
                            <p><strong>Week 3:</strong> In the third week, I will finish up the assembly started in week 2 and write the software for the build. That is, I will write code to run on the Arduino or ESP 32 that will control the rest of the components at the appropriate times. Time permitting, I would also like to build a web app to connect to this build so that users can enable and disable their alarms remotely.</p>
                            <p><strong>Week 4:</strong> In the final week, I will fix any bugs and iron out any kinks that will inevitably arise in the creation of this product. In particular, I imagine that creating a device to raise and lower the blinds in my room will be quite challenging. However, I will use the time in this week to fix any of these issues, as well as to publish the documentation for the project on <Link href="/finalproject">this website</Link>.</p>
                        </div>
                        <Link href="/">
                            <button className={styles.button}>Return Home</button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
