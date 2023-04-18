const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log(' in get req.body:', req.body)

  pool
  .query(`SELECT gender, height, weight FROM "info" ORDER BY id`)
  .then((result) => {
    console.log(' in get req.body:', result.rows)

    res.send(result.rows);
  })
  .catch(error => {
    console.log('error in get route', error)
    res.sendStatus(500)
  }) 
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // console.log(' in post req.body:', req.body)
  // POST route code here
  const newInputt = req.body;
  const queryText = `INSERT INTO "info" (gender, height, weight, user_id)
  VALUES ($1, $2, $3, $4)`;
  pool.query(queryText, [newInputt.gender, newInputt.height, newInputt.weight, req.user.id])
    .then(() => res.sendStatus(201))
    .catch(error => {
      res.sendStatus(500)
      console.log('error')
    })
});

module.exports = router;
