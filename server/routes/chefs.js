const express = require('express');
const chefsRoutes = express.Router();

const Chefs = require('../models/chefs');

chefsRoutes.get('/', (req, res) => {
    Chefs.find((err, chef) => {
        if (err) return res.status(500).send(err);
        return res.send(chef);
    })
})

chefsRoutes.post('/', (req, res) => {
    const newChef = new Chef (req.body);
    newChef.save((err) => {
        if(err) return res.status(500).send(err);
        return res.send(newChef)
    })
})

module.exports = chefsRoutes;