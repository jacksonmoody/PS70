import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { CopyBlock, googlecode } from "react-code-blocks";
import clock_diagram from '../public/images/clock_diagram.jpg';

export default function Week7() {
    const code = `
    #include "pitches.h"
    #include <LiquidCrystal.h>
    
    const int melody[] = { NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4 };
    const int times[] = { 4, 8, 8, 4, 4, 4, 4, 4 };
    const int alarmTime = 30000;
    int previousMillis = 0;
    
    class Button {
      int pin;
      int buttonState;
    
    public:
      Button(int inputPin) {
        pin = inputPin;
        buttonState = 0;
      }
    
      int getReading() {
        buttonState = digitalRead(pin);
        return buttonState;
      }
    };
    
    class Buzzer {
      int pin;
    
    public:
      Buzzer(int inputPin) {
        pin = inputPin;
        pinMode(pin, INPUT);
      }
    
      void playTune() {
        for (int thisNote = 0; thisNote < 8; thisNote++) {
          int noteDuration = 1000 / times[thisNote];
          tone(pin, melody[thisNote], noteDuration);
    
          int pauseBetweenNotes = noteDuration * 1.30;
          delay(pauseBetweenNotes);
          noTone(pin);
        }
      }
    };
    
    Button button(41);
    Buzzer buzzer(40);
    LiquidCrystal lcd(14, 13, 12, 20, 19, 21);
    
    void setup() {
      lcd.begin(16, 2);
      lcd.print("Time Remaining:");
    }
    
    void loop() {
      int status = button.getReading();
      if (status == 1) {
        previousMillis = millis();
        lcd.clear();
        lcd.setCursor(1, 0);
        lcd.print("Time Remaining:");
      }
      if (millis() - previousMillis >= alarmTime) {
        lcd.setCursor(0, 0);
        lcd.clear();
        lcd.print("Time's Up!");
        buzzer.playTune();
        delay(1000);
      } else {
        lcd.setCursor(0, 1);
        int time = (alarmTime - (millis() - previousMillis)) / 1000;
        lcd.print(String(time) + " seconds ");
      }
    }`;

    return (
        <div>
            <Head>
                <title>PS70 Portfolio: Week 7</title>
            </Head>
            <Header image="https://i.imgur.com/SmP7OtJ.jpg" title="Week 7" />


            <div className={styles.content}>
                <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
                    <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
                        <div className={styles.section}>
                            Electronic Output Devices
                        </div>
                        <video width="80%" height="auto" controls>
                            <source src="clock_demo.mp4" type="video/mp4" />
                        </video>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 1, sm: 1 }} mt={10}>
                        <div className={styles.section}>
                            Creating a Timer
                        </div>
                        <div className={styles.text}>
                            <p>Now that I have pretty much decided on creating an alarm clock-esque device for my final project, I wanted to start incorporating components of my final project into my weekly assignments. With this week having an open-ended assignment where we explore various output devices, it seemed like the perfect assignment to start with.</p>
                            <p>In particular, I decided to use an LCD Display and Piezo Buzzer as my output devices and a button and ESP32 as the devices providing input. Ultimately, I was able to use these devices to create a simple 30 second timer that can be reset using a button.</p>
                        </div>
                        <div className={styles.rectangle}>
                            <Image src={clock_diagram} alt="Wiring Diagram" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className={styles.text}>
                          <Link href="https://www.circuitschools.com/interfacing-16x2-lcd-module-with-esp32-with-and-without-i2c/"><p><em>Image Credit: Circuit Schools</em></p></Link>
                          <p>However, as the circuit above demonstrates, wiring the LCD component in particular proved to be unexpectedly challenging. To save time and to allow me to correct if I made any mistakes, I decided to use clips as opposed to soldering the wires. However, this made the circuit quite unstable, and I will certainly be soldering the wires for my final project.</p>
                          <p>Luckily, once the LCD was wired, integrating the button and Piezo buzzer proved to be relatively straightforward. While I did have some slight difficulties integrating the ESP32 into my project for the first time, I think that having such a capable and small microprocessor will ultimately be quite beneficial!</p>
                        </div>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} order={{ xs: 2, sm: 2 }}>
                        <div className={styles.text}>
                            <h1>Programming</h1>
                            <p>Seeing as this project had various different components, I decided to encapsulate the code for the LCD, buzzer, and button into respective classes. This allowed me to abstract away any unnecessary details about the devices themselves and to allow for simultaneous input/output.</p>
                            <p>Given the complexity of the components I was using, I also chose to make use of pre-built functions and libraries. In particular, for the LCD, I used the LiquidCrystal library which allowed me to easily print text to the screen. For the buzzer, I used the tone<span>&#40;</span><span>&#41;</span> and noTone<span>&#40;</span><span>&#41;</span> functions, which allowed me to play a simple tune when the timer was done. Finally, for the button, I used the digitalRead<span>&#40;</span><span>&#41;</span> function, which allowed me to read the state of the button in the pullup resistor circuit.</p>
                            <p>Lastly, I imported standard notes from a "pitches.h" file and started a timer using the millis<span>&#40;</span><span>&#41;</span> function. With some more troubleshooting, the project was soon ready to go! For reference, the full code for this timer is provided below:</p>
                        </div>
                        <div className={styles.code}>
                            <CopyBlock
                                text={code}
                                language='c'
                                wrapLines
                                theme={googlecode}
                            />
                        </div>
                        <Link href="/files/Clock.zip" locale={false}>
                            <button className={styles.button}>Download Code</button>
                        </Link>
                        <Link href="/">
                            <button className={styles.button}>Return Home</button>
                        </Link>
                    </Grid>
            </div>
        </div>
    )
}
