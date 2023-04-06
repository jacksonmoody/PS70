const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`The current direction is ${app.get('direction')} and the current speed is ${app.get('speed')}`);
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
  res.send(`Set direction to ${app.get('direction')} and time to ${app.get('time')}`);
})

app.post('/speed', (req, res) => {
  console.log("New Speed Request");
  app.set('speed', req.query.speed);
  res.send(`Set speed to ${app.get('speed')}`);
})

app.listen(port, () => {
  console.log(`API Started On Port ${port}`);
})

module.exports = app;
