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
        const passwordMatch = await bcrypt.compare(req.body.password, userFound.password)
        if(passwordMatch){
            console.log("password match -V-")
            console.log(passwordMatch)
            res.json({msg:"Password is correct"})
        } else {
            res.status(400).json({msg:"Wrong password."})
        }
        // res.json({msg:"from POST(login) /api/user/login"})
    } else {
        res.status(400).json({msg:"User not found."})
    }

})

//Logout.
router.delete('/api/user/login', function (req, res) {
    res.json({msg:"from DELETE(logout) /api/user/login"})
})

module.exports = router