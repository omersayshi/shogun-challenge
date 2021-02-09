const express = require('express');
const named = require('yesql').pg;
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'postgres',
  port: 5555,
});

const DEFAULT_PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/properties', (req, res) => {
  try {
    const { sortby: sorters } = req.body;
    let query = '';
    switch (sorters) {
      case 'price':
        query =
          'SELECT id, sale_type, property_type, property_address, city, state_or_province, price, beds, baths FROM public.properties ORDER BY price ASC';
        break;
      case 'bedrooms':
        query =
          'SELECT id, sale_type, property_type, property_address, city, state_or_province, price, beds, baths FROM public.properties ORDER BY beds ASC';
        break;
      default:
        query =
          'SELECT id, sale_type, property_type, property_address, city, state_or_province, price, beds, baths FROM public.properties ORDER BY id ASC';
        break;
    }

    db.query(query, (err, dbReturn) => {
      try {
        res.status(200).send({ properties: dbReturn.rows });
      } catch (err) {
        res.status(400).send({ error: err.stack });
      }
    });
  } catch (err) {
    res.status(400).send({ error: err.stack });
  }
});

app.get('/property/:propertyId', (req, res) => {
  try {
    const query = 'SELECT * FROM public.properties WHERE id = :propId';
    db.query(
      named(query)({ propId: req.params.propertyId }),
      (err, dbReturn) => {
        try {
          res.status(200).send(dbReturn.rows[0]);
        } catch (err) {
          res.status(400).send({ error: err.stack });
        }
      }
    );
  } catch (err) {
    res.status(400).send({ error: err.stack });
  }
});

// used npm detect-port for this
// checks if we are using DEFAULT_PORT, if yes then use another random PEER_PORT port
app.listen(DEFAULT_PORT, () => {
  console.log(`listening at localhost:${DEFAULT_PORT}`);
});
