const express = require('express')

const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to retrieve resources'})
        })
})

router.post('/', (req, res) => {
    const resData = req.body;

    Resources.add(resData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to create new resource" })
        })
})

module.exports = router;