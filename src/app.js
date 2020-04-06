const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send(`I'm up and running..`);
});

const port = 8080;

app.listen(port, () =>
  console.log(`Express server is up & running on port ${port}`)
);
