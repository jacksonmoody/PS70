class Motor {
  int A1A;
  int A1B;
  unsigned long previousMillis;
  long onInterval;
  long offInterval;
  int speed;
  int motorState;
  int direction;

public:
  Motor(int pinA, int pinB, int setSpeed, int setOnInterval, int setOffInterval) {
    A1A = pinA;
    A1B = pinB;
    speed = setSpeed;
    onInterval = setOnInterval;
    offInterval = setOffInterval;
    previousMillis = 0;
    motorState = LOW;
    direction = 0;

    pinMode(A1A, OUTPUT);
    pinMode(A1B, OUTPUT);
  }

  void driveMotor(byte d, int s) {
    if (d == 1) {
      analogWrite(A1A, 255 - s);
      digitalWrite(A1B, HIGH);
    } else if (d == 0) {
      analogWrite(A1A, s);
      digitalWrite(A1B, LOW);
    }
  }

  void setSpeed(int newSpeed) {
    speed = newSpeed;
  }

  void setDelay(int newDelay) {
    offInterval = newDelay;
  }

  void update() {
    unsigned long currentMillis = millis();
    if ((motorState == LOW) && (currentMillis - previousMillis >= offInterval) && direction == 0) {
      driveMotor(LOW, speed);
      motorState = HIGH;
      previousMillis = currentMillis;
      direction = 1;
    } else if ((motorState == LOW) && (currentMillis - previousMillis >= offInterval) && direction == 1) {
      driveMotor(HIGH, speed);
      motorState = HIGH;
      previousMillis = currentMillis;
      direction = 0;
    } else if ((motorState == HIGH) && (currentMillis - previousMillis >= onInterval)) {
      driveMotor(LOW, 0);
      motorState = LOW;
      previousMillis = currentMillis;
    }
  }
};

class Ultrasonic {
  int trigPin;
  int echoPin;
  int delay;
  long duration, cm, inches;
  unsigned long previousMillis;

public:
  Ultrasonic(int trigger, int echo, int pause) {
    trigPin = trigger;
    echoPin = echo;
    delay = pause;
    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);
  }

  void update() {
    unsigned long currentMillis = millis();
    if (currentMillis - previousMillis >= delay) {
      digitalWrite(trigPin, LOW);
      delayMicroseconds(5);
      digitalWrite(trigPin, HIGH);
      delayMicroseconds(10);
      digitalWrite(trigPin, LOW);

      duration = pulseIn(echoPin, HIGH);
      inches = (duration / 2) / 74;  // Divide by 74 or multiply by 0.0135
      previousMillis = currentMillis;
      
    }
  }

  int getInches() {
    return inches;
  }
};

class Light {
  int outputPin;
  int delay;
  int state;
  unsigned long previousMillis;

public:
  Light(int pin, int pause) {
    outputPin = pin;
    delay = pause;
    state = LOW;
    pinMode(outputPin, OUTPUT);
  }

  void update() {
    unsigned long currentMillis = millis();
    if (currentMillis - previousMillis >= delay) {
      if (state == LOW)
        state = HIGH;
      else
        state = LOW;
      digitalWrite(outputPin, state);
      previousMillis = currentMillis;
    }
  }

  void setDelay(int newDelay) {
    delay = newDelay;
  }
};

Motor motor1(3, 4, 255, 150, 1000);
Ultrasonic sensor(11, 12, 250);
Light light1(9, 1000);
Light light2(10, 1000);

void setup() {
  Serial.begin(9600);
}

void loop() {
  sensor.update();
  int distance = sensor.getInches();
  int reading = analogRead(A0);
  Serial.println(reading);
  int motorDelay =  map(reading, 0, 1023, 1000, 200);
  int lightSpeed = map(reading, 0, 1023, 1500, 50);
  motor1.setDelay(motorDelay);
  if (distance < 20) {
    motor1.setSpeed(255);
  } else {
    motor1.setSpeed(0);
  }
  motor1.update();
  light1.setDelay(lightSpeed);
  light1.update();
  light2.setDelay(lightSpeed);
  light2.update();
}