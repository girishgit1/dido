const express = require('express');
const app = express();
const port = 8989;

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js app on Kubernetes!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
