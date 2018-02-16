const express = require('express');
const chefsRoutes = express.Router();
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const Chefs = require('../models/chefs');
const auth = expressJwt({ secret: process.env.SECRET })

chefsRoutes.post('/signup', (req, res) => {
    Chefs.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) return res.status(500).send({ success: false, err });
        if (existingUser !== null) {
            return res.status(400).send({ success: false, err: "That Email Already Exists!" });
        }
        const newUser = new Chefs(req.body);
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ success: false, err });
            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return res.status(201).send({ success: true, user: user.toObject(), token })
        })
    });
});

chefsRoutes.post('/login', (req, res) => {
    Chefs.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
            return res.status(400).send({ success: false, message: "Email or password is incorrect" })
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.send({ token: token, user: user.toObject(), success: true, message: "Heres your token mudderfucker" })
    })
});

// chefsRoutes.use();
chefsRoutes.get('/:id', (req, res) => {
    Chefs.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send({ success: false, err });
        if (user === null) return res.status(400).send({ success: false, err: "User not found!" })
        return res.status(200).send({ success: true, user: user.withoutPassword() })
    })
})

module.exports = chefsRoutes;