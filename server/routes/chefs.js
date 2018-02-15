const express = require('express');
const chefsRoutes = express.Router();

const Chefs = require('../models/chefs');

chefsRoutes.get('/'), (req, res) => {
    Chefs.find((err, chef) => {
        if (err) return res.status(500).send(err);
        return res.send(chef);
    })
}

module.exports = chefsRoutes;