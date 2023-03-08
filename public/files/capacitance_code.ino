class Capacitor {
  int readPin;
  int writePin;
  unsigned long previousMicros;

public:
  Capacitor(int pinA, int pinB) {
    readPin = pinA;
    writePin = pinB;
    previousMicros = 0;

    pinMode(readPin, INPUT);
    pinMode(writePin, OUTPUT);
  }

  long getReading() {
    previousMicros = micros();

    for (int count = 0; count < 1000; count++) {
      digitalWrite(writePin, HIGH);
      while(!digitalRead(readPin)) {}
      digitalWrite(writePin, LOW);
      while(digitalRead(readPin)) {}
    }

    return (micros() - previousMicros);
  }
};

Capacitor sensor(5,7);

void setup() {
  Serial.begin(9600);
}

void loop() {
  long readings[100];
  for (int i = 0; i < 100; i++) {
    readings[i] = sensor.getReading();
    delay(10);
  }

  long sum = 0;

  for (int j = 0; j < 100; j++) {
    sum += readings[j];
  }

  Serial.println(sum / 100);
}