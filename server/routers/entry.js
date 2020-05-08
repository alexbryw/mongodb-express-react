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
router.get('/api/entry', (req, res, next) => {
    //res.json({msg:"from GET /api/entry"})
    Entry.find()
    .select('_id username title text image')
    .exec()
    .then(docs => {
        console.log('from getting all the entries', docs)
        const response = {
            count: docs.length,
            entries: docs.map(doc => {
                return {
                    _id: doc._id,
                    username: doc.username,
                    title: doc.title,
                    image: doc.image,
                    text: doc.text,
                    request: {
                        type: "GET",
                        url: "http://localhost:9000/api/entry/" + doc._id
                    }
                }
            })
        }
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({
            message: 'No entries found'
        })
    })
})

//Get entry by id

router.get('/api/entry/:_id', (req, res, next) => {
    const id = req.params._id

    Entry.findById(id)
    .select('username title text _id image')
    .exec()
    .then(doc => {
        console.log('From database: ', doc)
        if(doc) {
            res.status(200).json({
                entry: doc,
                request: {
                    type: 'GET',
                    url: 'http://localhost:9000/api/entry'
                }
            })
        } else {
            res.status(404).json({message: ' Did not find specific entry '})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
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
                _id: result._id,
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
router.put('/api/entry/:id', function (req, res) {
/*     const entry = Entry.find(ent => ent._id === parseInt(req.params._id))

    if(!entry){
        return res.status(404).send("Can't find entry")
    }
    entry.title = req.body.title
    entry.image = req.file.path
    entry.text = req.body.text */
    res.json({msg:"from PUT /api/entry"})
})

//Delete entry.
router.delete('/api/entry', function (req, res) {
    //const {_id} = req.body
    res.json({msg:"from DELETE /api/entry"})
})

module.exports = router