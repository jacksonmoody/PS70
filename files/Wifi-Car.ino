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
