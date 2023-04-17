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
    console.log('req.body:', req.body)
  // POST route code here
  const newInputt = req.body;
  const queryText = `INSERT INTO "user" (height, weight)
  VALUES ($1, $2)`
});

module.exports = router;
