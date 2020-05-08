const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User.model')

//Get user.
router.get('/api/user',secureRoute("admin"), function (req, res) {
    res.json({msg:"from GET /api/user"})
    //TODO return all users to admin.
})

//Add user.
router.post('/api/user', async function (req, res) {
    let cryptPassword
    if(!req.body.password || req.body.password.length < 5){
        return res.status(400).send({msg: "Password is to short, 6 or longer"})
    } else {
        cryptPassword = await bcrypt.hash(req.body.password, 10)
    }

    let user = new User({username: req.body.username, password: cryptPassword, admin: false})
    // console.log(user)
    try {
        user.save(function (err, user) {
            if(err){//db error, duplicate name or bad password.
                res.status(400).send(
                {msg: err.message})
            }
            res.status(201).json(user)//201 OK created and send back new user.
        })
    } catch (error) { //Other errors.
        console.log(error)
        res.status(400).send({msg: "Error creating a new user"})
    }
})

//Update user.
router.put('/api/user',secureRoute("admin"), function (req, res) {
    res.json({msg:"from PUT /api/user"})
    //TODO admin updates users.
})

//Delete user.
router.delete('/api/user',secureRoute("admin"), function (req, res) {
    res.json({msg:"from DELETE /api/user"})
    //TODO admin can delete users.
})

//Check if user has correct access privileges like 'admin' or 'user'.
function secureRoute(role){
    return function(req, res, next) {
        if(req.session.role !== role){
            res.status(401).json({msg: "Access denied. Please login with the correct access privileges"})
            return
        }
        console.log(" Correct user role , access granted.")
        next()
    }
}

module.exports = router