const express = require('express');
const { Database } = require('./data/database.model');

/* Drop database tables and recreate them with a seeding data. */
const db = new Database();
db.initialize();

/**
 * The express app instance.
 */
const app = express();

app.get('', async (req, res) => {
  try {
    const db = new Database();
    const products = await db.Products.findAll({ raw: true });

    res.send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * The port that the express application will run on.
 */
const port = 8080;

app.listen(port, () =>
  console.log(`Express server is up & running on port ${port}`)
);
