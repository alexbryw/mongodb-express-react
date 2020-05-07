const express = require('express')
const router = express.Router()

//Get user.
router.get('/api/user', function (req, res) {
    res.json({msg:"from GET /api/user"})
})

//Add user.
router.post('/api/user', function (req, res) {
    res.json({msg:"from POST /api/user"})
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