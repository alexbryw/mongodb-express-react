const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userRoute = require('../models/User.model')


//Check if user is logged in.
router.get('/api/user/login', async function (req, res) {
    if(!req.session.username){
        res.status(401).send({msg:"User not logged in."})
        return
    } else {
        const userFound = await userRoute.findOne({username: req.session.username})
        if(userFound){
            userFound.password = ""
            res.json(userFound) //Send back user from db.
        } else {
            res.status(400).json({msg: "User not found, try clearing out old browser cookies."})
        }
    }
})

//Login.
router.post('/api/user/login', async function (req, res) {
    if(!req.body.username || !req.body.password){
        res.status(400).send({msg:"Username or password is missing."})
        return
    }

    const userFound = await userRoute.findOne({username: req.body.username})
    if(userFound) {
        if(req.session.username != null){
            return res.status(400).json({msg:"User already logged in."})
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userFound.password)
        if(passwordMatch){
            req.session.username = userFound.username
            req.session.role = userFound.admin ? "admin" : "user"
            userFound.password = ""
            res.json(userFound)
        } else {
            res.status(400).json({msg:"Wrong password."})
        }
    } else {
        res.status(400).json({msg:"User not found."})
    }

})

//Logout.
router.delete('/api/user/logout', function (req, res) {
    if(!req.session.username){
        return res.status(400).json({msg: "User already logged out."})
    }
    req.session = null
    res.json({msg:"User logged out."})
})

module.exports = router