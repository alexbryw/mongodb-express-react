const express = require('express')
const router = express.Router()

//Get all entries.
router.get('/api/entry', function (req, res) {
    res.json({msg:"from GET /api/entry"})
})

//Add entry.
router.post('/api/entry', function (req, res) {
    res.json({msg:"from POST /api/entry"})
})

//Update entry.
router.put('/api/entry', function (req, res) {
    res.json({msg:"from PUT /api/entry"})
})

//Delete entry.
router.delete('/api/entry', function (req, res) {
    res.json({msg:"from DELETE /api/entry"})
})

module.exports = router