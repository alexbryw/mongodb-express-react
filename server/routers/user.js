const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/User.model')

//Get user.
router.get('/api/user', function (req, res) {
    res.json({msg:"from GET /api/user"})
})

//Add user.
router.post('/api/user', function (req, res) {
    //TODO add bcryp password.
    let user = new User({username: req.body.username, password: req.body.password, admin: false})
    console.log(user)
    try {
        user.save(function (err, user) {
            if(err){//db error, duplicate name or bad password.
                res.status(400).send(
                {err: err.message})
            }
            res.status(201).json(user)//201 OK created and send back new user.
        })
    } catch (error) { //Other errors.
        console.log(error)
        res.status(400).send({msg: "Error creating a new user"})
    }
})

//Update user.
router.put('/api/user', function (req, res) {
    res.json({msg:"from PUT /api/user"})
})

//Delete user.
router.delete('/api/user', function (req, res) {
    res.json({msg:"from DELETE /api/user"})
})

module.exports = router