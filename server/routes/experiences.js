const express = require('express');
const expRoutes = express.Router();


const Exp = require('../models/experience');

expRoutes.route('/')
    .get((req, res) => {
        Exp.find((err, foundExp) => {
            if(err) return res.status(500).send(err);
            return res.send(foundExp)
        })
    })
    .post((req, res) => {
        let newExp = new Exp(req.body);
        // expChef = req.user._id;
        newExp.save((err, newExp) => {
            if(err) return res.status(500).send(err);
            return res.send(newExp)
        })
    })

expRoutes.route('/:id')
    .put((req, res) => {
        let { id } = req.params;
        Exp.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedExperience) => {
            if(err) return res.status(500).send(err);
            return res.send(updatedExperience)
        })
    })

    .delete((req, res) => {
        let { id } = req.params;
        Exp.findOneAndRemove(id, (err, removedExperience) =>{
            if(err) return res.status(500).send(err);
            return res.send(removedExperience)
        })
    })

    module.exports = expRoutes;