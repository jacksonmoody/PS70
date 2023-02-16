import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import sculptureback from '../public/images/sculptureback.jpg';
import { CopyBlock, googlecode } from "react-code-blocks";

export default function Week3() {
    const code = `const int A1A = 3;  
    const int A1B = 4;  
    
    void setup() {
      pinMode(A1A, OUTPUT); 
      pinMode(A1B, OUTPUT);
    
      pinMode(A0, OUTPUT);  
      pinMode(A4, OUTPUT);  
    
      digitalWrite(A0, LOW);
      digitalWrite(A4, HIGH);
    }
    
    void loop() {
      int pot_value = analogRead(A2);
      int new_value = map(pot_value, 0, 1023, 255, 0);
      motorA(LOW, 0); 
      delay(1000);   
      motorA(LOW, new_value); 
      delay(250);   
      motorA(LOW, 0); 
      delay(1000);
      motorA(HIGH, new_value); 
      delay(250);      
    }
    
    void motorA(byte d, int s) {
      if(d == 1){
        analogWrite(A1A, 255-s); 
        digitalWrite(A1B, HIGH); 
      } else if (d == 0){
        analogWrite(A1A, s); 
        digitalWrite(A1B, LOW);
      }
    }`;

    return (
        <div>
            <Head>
                <title>PS70 Portfolio: Week 3</title>
            </Head>
            <Header image="https://i.imgur.com/IhpgCkT.jpg" title="Week 3" />

            <div className={styles.content}>
                <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
                    <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
                        <div className={styles.section}>
                            Kinetic Sculpture
                        </div>
                        <div className={styles.text}>
                            <video width="40%" height="auto" autoPlay loop muted>
                                <source src="kineticsculpture.mp4" type="video/mp4" />
                            </video>
                            <h2>Background</h2>
                            <p>For this week's project, we were tasked with creating some sort of kinetic sculpture—a description I interpreted to mean anything that moves. Consequently, I chose to create a moving person sculpture that waves hello repeatedly. Though seemingly simple, this project had many technical challenges. However, now that it is done, it brings me lots of joy whenever I see it waving on my desk!</p>

                            <h2>Creating the Base</h2>
                            <p>Given the week's emphasis on hand tools, I decided to use a scroll saw and hand saw to create the frame of this project. In particular, I drew an outline of a person by hand and cut it out using the scroll saw. While I had never used the scroll saw for such an intricate outline before, I think it turned out rather well!</p>
                            <p>After cutting the person, I used a spare 2x4 block of wood and the drill press to create the base. Indeed, by simply drilling out two large holes and filling them with wood glue, I was able to create a rather sturdy base into which to glue the person <span>&#40;</span>I ultimately employed a similar technique for the moter mount as well<span>&#41;</span>. If I were creating a more professional project, I would likely have employed a CNC mill or more precise machine to create rectangular slots rather than circular holes. However, for the purposes of this week's assignment, I think the dril press was adequate.</p>

                            <h2>Lasering the Details</h2>
                            <p>After creating the more crude details <span>&#40;</span>namely the body, base, and motor mount<span>&#41;</span> using hand tools, I then transitioned into using the laser cutter to create the more intricate pieces. In particular, I didn't trust myself to cut the hands or heart with a manual saw, and I thought the precision of a laser cutter would be a better fit. While I did struggle to dial in the settings for the thickness of the wood, once I got the settings correct, I think the hands and heart came out pretty well!</p>
                            <Link href="/files/sculpturefiles.zip" locale={false}>
                                <button className={styles.buttonlarge}>Download Laser Cutting Files</button>
                            </Link>

                            <h2>Adding Movement</h2>
                            <p>Once all of the pieces were cut, it was time to make the sculpture move! Initially, my idea was to connect the motor directly to an arm and have the singular arm wave. However, after creating all of the individual pieces, I realized that it would look strange for only one arm to be moving. With the weak joint of the body and the base, I also was worried about connecting the motor directly to the body.</p>
                            <p>With this in mind, I decided to modify my plan. To move both of the arms together, I glued them to a singular dowel and added a gear on the end. I then connected this gear to a belt which was looped onto the motor <span>&#40;</span>as depicted below<span>&#41;</span>.</p>
                            <div className={styles.rectanglesmall}>
                                <Image src={sculptureback} alt="Sculpture Gears" fill style={{ objectFit: "contain" }} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} order={{ xs: 3, sm: 3 }} mt={15}>
                        <div className={styles.code}>
                            <CopyBlock
                                text={code}
                                language='c'
                                wrapLines
                                theme={googlecode}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }} mt={10}>
                        <div className={styles.section}>
                            Finishing Touches
                        </div>
                        <div className={styles.text}>
                            <p>With the mechanical components of the sculpture complete, it was now time to connect the motor. To do so, I first soldered two wires onto the positive and negative leads of the motor. I then connected these wires into a <a href="https://datasheetspdf.com/pdf-file/839657/ASIC/L9110/1" target="_blank" className={styles.link}> L9110 Motor Driver</a> so that I could rotate the motor both forwards and backwards. Lastly, I connected the driver and a potentiometer to an Arduino Uno in accodance with <a href="https://nathanmelenbrink.github.io/ps70/04_arduino/index.html" target="_blank" className={styles.link}>the tutorial we completed in class</a>. </p>
                            <p>The code uploaded to the Arduino takes heavy inspiration from that same in class workshop. By reading in values from the potentiometer and then driving the motor forward and backward at that speed, one accomplishes a variable "waving" effect!</p>
                            <p>Overall, I am proud of how this project turned out. While the mounting of the motor and the reliability of the gear/shaft mechanism could certainly be improved going forward, this project was certainly a step in the right direction :<span>&#41;</span></p>
                        </div>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 4, sm: 4 }}>
                        <Link href="/">
                            <button className={styles.button}>Return Home</button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
