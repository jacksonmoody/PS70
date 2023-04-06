import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../components/Content.module.css'
import Grid from '@mui/material/Grid';
import { CopyBlock, googlecode } from "react-code-blocks";

export default function Week9() {
  const code1 = `
  #include "Buttons.h"
  #include "Constants.h"
  #include <WiFi.h>
  #include <HTTPClient.h>
  #include <ArduinoJson.h>
  
  const char* ssid = "MAKERSPACE";
  const char* password = "12345678";
  String directions[4] = {"forward", "backward", "left", "right"};
  
  const String speedUrl = "https://ps70-api.vercel.app/speed";
  const String directionUrl = "https://ps70-api.vercel.app/direction";
  int lowerBounds[] = {400, 100, 750, 2400};
  int upperBounds[] = {500, 200, 850, 2600};
  
  Buttons bs = Buttons(BUTTON_PIN, lowerBounds, upperBounds);
  
  void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Connecting to WiFi");
    }
    Serial.println("Connected to the WiFi network");
  }
  
  void loop() {
    int buttonValue = bs.detectStart();
    if (buttonValue != -1) {
      Serial.println(buttonValue);
      String direction = directions[buttonValue];
      Serial.println("direction=" + direction + "&time=" + millis());
      if ((WiFi.status() == WL_CONNECTED)) {
        HTTPClient http;
        http.begin(directionUrl + "?direction=" + direction + "&time=" + millis());
        int httpResponseCode = http.POST("");
        String payload = http.getString();
        Serial.println(payload);
        Serial.println(httpResponseCode);
        http.end();
      }
    }
  }`;

  const code2 = `
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("The current direction is app.get('direction') and the current speed is app.get('speed')");
})

app.get('/direction', (req, res) => {
  res.json({ direction: app.get('direction'), time: app.get('time') })
})

app.get('/speed', (req, res) => {
   res.send(app.get('speed'));
  })

app.post('/direction', (req, res) => {
  console.log("New Direction Request");
  app.set('direction', req.query.direction);
  app.set('time', req.query.time);
  res.send("Set direction to app.get('direction') and time to app.get('time')");
})

app.post('/speed', (req, res) => {
  console.log("New Speed Request");
  app.set('speed', req.query.speed);
  res.send("Set speed to app.get('speed')");
})

app.listen(port, () => {
  console.log("API Started On Port (port)");
})

module.exports = app;
`;

  const code3 = `
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "MAKERSPACE";
const char* password = "12345678";

const String speedUrl = "https://ps70-api.vercel.app/speed";
const String directionUrl = "https://ps70-api.vercel.app/direction";

const int motor1A = 18;
const int motor1B = 23;
const int motor2A = 10;
const int motor2B = 5;

const int freq = 5000;
const int channel1 = 0;
const int channel2 = 1;
const int resolution = 8;

int previousTime = 0;

class Motor {
  int A1A;
  int A1B;
  int speed;
  int direction;

public:
  Motor(int channel, int pinB) {
    A1A = channel;
    A1B = pinB;
    speed = 0;
    direction = 0;

    pinMode(A1A, OUTPUT);
    pinMode(A1B, OUTPUT);
  }

  void driveMotor(byte d, int s) {
    if (d == 1) {
      ledcWrite(A1A, 255 - s);
      digitalWrite(A1B, HIGH);
    } else if (d == 0) {
      ledcWrite(A1A, s);
      digitalWrite(A1B, LOW);
    }
  }

  void setSpeed(int newSpeed) {
    speed = newSpeed;
  }

  void setDirection(int newDirection) {
    direction = newDirection;
  }

  void update() {
    if (direction == 0) {
      driveMotor(LOW, speed);
    } else if (direction == 1) {
      driveMotor(HIGH, speed);
    }
  }
};

Motor motor1(channel1, motor1B);
Motor motor2(channel2, motor2B);

void setup() {

  ledcSetup(channel1, freq, resolution);
  ledcAttachPin(motor1A, channel1);

  ledcSetup(channel2, freq, resolution);
  ledcAttachPin(motor2A, channel2);

  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi");
  }
  Serial.println("Connected to the WiFi network");
}

void loop() {
  Serial.println("Refreshing");
  int time = 0;
  int speed = 0;
  String direction = "";

  if ((WiFi.status() == WL_CONNECTED)) {
    HTTPClient http;
    http.begin(speedUrl);
    int httpResponseCode = http.GET();

    if (httpResponseCode > 0) {
      String payload = http.getString();
      speed = payload.toInt();
    }
    http.end();

    http.begin(directionUrl);
    httpResponseCode = http.GET();

    if (httpResponseCode > 0) {
      String payload = http.getString();
      DynamicJsonDocument doc(64);
      DeserializationError error = deserializeJson(doc, payload);
      if (error) {
        Serial.println("Deserialization Error");
        time = 1;
        direction = "";
        return;
      }
      direction = doc["direction"].as<String>();
      time = int(doc["time"]);
    }
    http.end();

    Serial.println(speed);
    Serial.println(direction);
    Serial.println(time);

    motor1.setSpeed(speed);
    motor2.setSpeed(speed);

    if (time != previousTime) {
      previousTime = time;
      if (direction == "left") {
        motor1.setDirection(1);
        motor2.setDirection(0);
        pause(290);
      } else if (direction == "right") {
        motor1.setDirection(0);
        motor2.setDirection(1);
        pause(290);
      } else if (direction == "backward") {
        motor1.setDirection(0);
        motor2.setDirection(0);
        pause(500);
      } else if (direction == "forward") {
        motor1.setDirection(1);
        motor2.setDirection(1);
        pause(500);
      }
    }
  }
}

void pause(int duration) {
  motor1.update();
  motor2.update();
  delay(duration);
  motor1.setSpeed(0);
  motor2.setSpeed(0);
  motor1.update();
  motor2.update();
}
`;

  return (
    <div>
      <Head>
        <title>PS70 Portfolio: Week 9</title>
      </Head>
      <Header image="https://i.imgur.com/kNoe3ur.jpg" title="Week 9" />

      <div className={styles.content}>
        <Grid container alignItems="flex-start" justifyContent="center" columnSpacing={10} sx={{ marginTop: 5 }}>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }}>
            <div className={styles.section}>
              Networking and IoT
            </div>
            <video width="80%" height="auto" autoPlay loop muted>
              <source src="car_demo.mp4" type="video/mp4" />
            </video>
          </Grid>
          <Grid item xs={12} order={{ xs: 1, sm: 1 }} mt={10}>
            <div className={styles.section}>
              Creating a Wi-Fi Car
            </div>
            <div className={styles.text}>
              <p>For this week's assignment, we were tasked with using networking and the internet of things to create a project. In particular, I chose to work with <a href="https://guoingup.github.io/PS70-Digital-Fabrication/">Claire Guo</a> and <a href="https://cjleggett.github.io/ps70/index.html?first=False">Connor Leggett</a> to create a Wi-Fi controllable car!</p>
              <p>To create this car, we needed three main components: An ESP32 to monitor inputs (from buttons and from an RFID scanner), an API to monitor the state of these inputs, and an ESP32 to fetch data from the API and control the car motors! </p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} order={{ xs: 2, sm: 2 }}>
          <div className={styles.text}>
            <h1>Monitoring Inputs</h1>
            <p>The first major component of this project was a device to monitor inputs. In particular, we chose to use an ESP32 connected to 4 buttons (and later an RFID scanner) to detect user input. Depending on the input, the ESP32 then used the code below to send the appropriate request to the API.</p>
          </div>
          <div className={styles.code}>
            <CopyBlock
              text={code1}
              language='c'
              wrapLines
              theme={googlecode}
            />
          </div>
          <Link href="/files/Inputs.ino" locale={false}>
            <button className={styles.button}>Download Code</button>
          </Link>
        </Grid>
        <Grid item xs={12} order={{ xs: 3, sm: 3 }}>
          <div className={styles.text}>
            <h1>Creating an API</h1>
            <p>Next, we needed to create an API so that the ESP32's could communicate with each other over Wi-Fi and the internet. Rather than using Firebase, I decided to build out the API from scratch using Node.js and Express. Given the fact that we didn't need to store large amounts of data, as well as the fact that I was already familiar with building backend applications using Node.js, this seemed like the ideal choice.</p>
            <p>Ultimately, the API has two routes which can be both modified (using POST requests) and read from (using GET requests). The /speed route takes the speed parameter and can be used to set the speed at which the motors rotate. The /direction route takes the direction parameter as well as a time parameter, which specify the direction for the robot to move in and the time at which the request was sent, respectively.</p>
            <p>Today, the API is publicly available and hosted using Vercel. This means that we can control our car from anywhere in the world with an internet connection! The full code for the API can be viewed below, and you can access it <a href="https://ps70-api.vercel.app/">here</a>.</p>
          </div>
          <div className={styles.code}>
            <CopyBlock
              text={code2}
              language='javascript'
              wrapLines
              theme={googlecode}
            />
          </div>
          <Link href="/files/api.js" locale={false}>
            <button className={styles.button}>Download Code</button>
          </Link>
        </Grid>
        <Grid item xs={12} order={{ xs: 4, sm: 4 }}>
          <div className={styles.text}>
            <h1>Driving the Car</h1>
            <p>Lastly, we needed to create the car itself and drive it by fetching data from the API. Connor primarily focused on the construction of the car (a 3D printed base with slots for two motors and a ping pong ball), while I focused more on the code driving the motors.</p>
            <p>In particular, I used the Wifi, HttpClient, and ArduinoJson libraries to fetch data from the API as a JSON and parse it into the relevant information. If the data from the API is valid and new (meaning that it has a different timestamp than the previously sent request), the ESP32 instructs the motors accordingly.</p>
            <p>Given that one ESP32 needs to send a POST request and another ESP32 needs to send a GET request everytime the robot moves, the movements of the car are somewhat delayed (as can be seen in the video above). While a more responsive car could likely be created using Bluetooth, I am overall very happy with how this project turned out!</p>
          </div>
          <div className={styles.code}>
            <CopyBlock
              text={code3}
              language='javascript'
              wrapLines
              theme={googlecode}
            />
          </div>
          <Link href="/files/Wifi-Car.ino" locale={false}>
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
