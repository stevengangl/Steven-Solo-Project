const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    pool
        .query(`SELECT * FROM "simulator" ORDER BY id`)
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
    const queryText = `INSERT INTO "simulator" (weight, todo, "inputEntered")
    VALUES ($1, $2, true)`;
    pool.query(queryText, [newInput.weight, newInput.todo])
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
