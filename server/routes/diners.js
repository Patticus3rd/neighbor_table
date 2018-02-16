const express = require('express');
const dinersRoutes = express.Router();
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const Diners = require('../models/diner');
const auth = expressJwt({ secret: process.env.SECRET })

dinersRoutes.post('/signup', (req, res) => {
    Diners.findOne({ email: req.body.email }, (err, existingUser ) => {
        if(err) return res.status(500).send({ success: false, err});
        if(existingUser !== null){
            return res.status(400).send({ success: false, err: "That Email Already Exists!"})
        }
        const newUser = new Diners(req.body);
        newUser.save((err, user) => {
            if(err) return res.status(500).send({ success: false, err});
            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return res.status(201).send({ success: true, user: user.toObject(), token})
        })
    })
});

dinersRoutes.post('/login', (req, res) => {
    Diners.findOne({ email: req.body.email.toLowercase()}, (err, user) => {
        if(err) return res.status(500).send(err);
        if(!user || user.password !== req.body.password){
            return res.status(400).send({ success: false, err: "Email or Password is incorrect"})
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.send({ token: token, user: user.toObject(), success: true, message: "Heres Your Token"})
    })
})

module.exports = dinersRoutes;