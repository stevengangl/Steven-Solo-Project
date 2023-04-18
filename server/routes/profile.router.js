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
  .query(`SELECT * FROM "info" ORDER BY id`)
  .then((result) => {
    // console.log(' in get req.body:', result.rows)

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


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  // console.log('dlete route',req.params.id)
  const idToDelete = req.params.id;
  // console.log('req.params.id:', idToDelete);
  const queryText = `DELETE FROM "info" WHERE id=$1`;
  pool.query(queryText, [idToDelete])
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.log('Error in router:', error);
      res.sendStatus(500);
    })
});

router.put('/:id', (req, res) => {
  // endpoint functionality
  const updatedItem = req.body;//this is the action.payload from shelf saga
  const itemId = req.params.id;//this is from the api/shelf/${action.payload.id} from shelf saga
  console.log('updatedItem',req.body)
  console.log('id',req.params.id)

  const queryText = `UPDATE info SET "height" = $1 , "weight" = $2 WHERE id=$3`
  pool
  .query(queryText, [updatedItem.height, updatedItem.weight, itemId])
  .then((result) => {
    res.sendStatus(200);
  
  })
  .catch(error => {
    console.log(error)
  })



});

module.exports = router;
