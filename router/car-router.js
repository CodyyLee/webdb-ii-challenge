const express = require('express');

const router = express.Router();

const db = require("../data/config/dbConfig.js");

router.post('/', async (req, res) => {
    const body = req.body
    try{
        res.json(await db('car-table').insert(body));
    }
    catch(err) {
        res.status(500).json({
            errorMessage: "There was an error trying to create this car's data."
        })
    }
})

router.get('/', (req, res) => {
    db('car-table')
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        })
})

module.exports = router;