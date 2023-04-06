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
}