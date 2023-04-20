const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
console.log('at start of post router', req.body)
    const newInput = req.body;
    const queryText = `INSERT INTO "simulator" (weight, todo)
    VALUES ($1, $2)`;
    pool.query(queryText, [newInput.weight, newInput.todo])
    .then(() => res.sendStatus(201))
    .catch(error => {
        console.log('error in post', error)
    })

});

module.exports = router;
