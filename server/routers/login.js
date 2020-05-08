const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userRoute = require('../models/User.model')

//Login.
router.post('/api/user/login', async function (req, res) {
    if(!req.body.username || !req.body.password){
        res.status(400).json({msg:"Username or password is missing."})
        return
    }

    const userFound = await userRoute.findOne({username: req.body.username})
    if(userFound) {
        console.log(req.session.username)
        if(req.session.username != null /*|| req.session.username !== userFound.username*/){
            return res.status(400).json({msg:"User already logged in."})
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userFound.password)
        if(passwordMatch){
            // console.log("password match -V-")
            req.session.username = userFound.username
            req.session.role = userFound.admin ? "admin" : "user"
            res.json(userFound)
        } else {
            res.status(400).json({msg:"Wrong password."})
        }
        // res.json({msg:"from POST(login) /api/user/login"})
    } else {
        res.status(400).json({msg:"User not found."})
    }

})

//Logout.
router.delete('/api/user/logout', function (req, res) {
    // console.log(req.session.username)
    // console.log(req.session.role)
    if(!req.session.username){
        return res.status(400).json({msg: "User already logged out."})
    }
    req.session = null
    res.json({msg:"User logged out."})
})

module.exports = router