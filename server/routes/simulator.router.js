const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM "simulator"  WHERE user_id = $1 ;`
    const queryValues = [req.user.id]
    pool
        .query(queryText, queryValues)
        .then((result) => {
            // console.log(' in get req.body:', result.rows)

            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in get route', error)
            res.sendStatus(500)
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // console.log('at start of post router', req.body)
    const newInput = req.body;
    const queryText = `INSERT INTO "simulator" (weight, todo, "inputEntered", "user_id")
    VALUES ($1, $2, true, $3)`;
    const queryValues = [ newInput.weight, newInput.todo, req.user.id]
    pool.query(queryText, queryValues)
        .then(() => res.sendStatus(201))
        .catch(error => {
            console.log('error in post', error)
        })

});

// router.put('/:id', rejectUnauthenticated, (req, res) => {
//     console.log('put route', req.params.id)

//     const id = req.params.id
//     const queryText = `UPDATE "simulator" SET "inputEntered" = TRUE WHERE id = $1`
//     pool
//         .query(queryText, [id])
//         .then((result) => {
//             res.sendStatus(200);
//         })
//         .catch(error => {
//             console.log(error)
//         })

// });

module.exports = router;
