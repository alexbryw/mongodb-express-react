const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
let Entry = require('../models/Entry.model')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype == 'image/png'){
        //accept
        cb(null, true)
    } else {
        //reject file
        cb(new Error('To big or wrong format'), false)
    }

}

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    }, 
    fileFilter: fileFilter
    })

//Get all entries.
router.get('/api/entry', function (req, res) {
    res.json({msg:"from GET /api/entry"})
})

//Add entry.
router.post('/api/entry', upload.single('image'), function (req, res, next) {
    console.log(req.file)
    //res.json({msg:"from POST /api/entry"})
    const entry = new Entry({
        _id: new  mongoose.Types.ObjectId(),
        username: req.body.username,
        title: req.body.title,
        image: req.file.path,
        text: req.body.text,
    })
    entry.save()
    .then(result => {
        console.log(result)
        res.status(201).json({
            createdEntry: {
                _id: result.id,
                username: result.username,
                title: result.title,
                request: {
                    type: 'GET',
                    url: "http://localhost:3000/entry/" + result._id
                },
                text: result.text,
            }
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })

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