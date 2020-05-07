const express = require('express')
const router = express.Router()

//Login.
router.post('/api/user/login', function (req, res) {
    res.json({msg:"from POST(login) /api/user/login"})
})

//Logout.
router.delete('/api/user/login', function (req, res) {
    res.json({msg:"from DELETE(logout) /api/user/login"})
})

module.exports = router