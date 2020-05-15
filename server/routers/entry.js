const express = require('express')
const router = express.Router()
const fs = require('fs')
const mongoose = require("mongoose");
const multer = require('multer')
let Entry = require('../models/Entry.model')

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
        cb(new Error('Wrong format'), false)
    }
}

const upload = multer({
    storage: storage, 
    fileFilter: fileFilter
    })

//GET all entries.
router.get('/api/entry', (req, res, next) => {
    Entry.find()
    .select('_id username title text image')
    .exec()
    .then(docs => {
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
        res.status(404).send(
             'No entries found'
        )
    })
})

//GET entry by id

router.get('/api/entry/:id', (req, res, next) => {
    const id = req.params.id

    Entry.findById(id)
    .select('username title text _id image')
    .exec()
    .then(doc => {
        if(doc) {
            res.status(200).json({
                entry: doc,
                request: {
                    type: 'GET',
                    url: 'http://localhost:9000/api/entry'
                }
            })
        } else {
            res.status(404).send(' Did not find specific entry ')
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
})


//ADD entry.
router.post('/api/entry', secureRouteAnyUser, upload.single('image'), function (req, res, next) {
    const entry = new Entry({
        _id: new  mongoose.Types.ObjectId(),
        username: req.session.username, //Changed to cookie username of logged in user.
        title: req.body.title,
        image: req.file.path,
        text: req.body.text,
    })
    entry.save()
    .then(result => {
        res.status(201).json({
            createdEntry: {
                _id: result._id,
                username: result.username,
                title: result.title,
                request: {
                    type: 'GET',
                    url: "http://localhost:9000/api/entry/" + result._id
                },
                text: result.text,
            }
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(
            {msg: "Could not upload entry"}
        )
    })

})

//PUT entry.
router.put('/api/entry/:id',secureRouteUserOrAdmin, async (req, res) => {

    try{
        const id = req.params.id
        const entry = await Entry.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        res.status(200).json({

            old: entry,
            new: {
                _id: req.params.id,
                username: req.params.username,
                title: req.body.title,
                image: entry.image,
                text: req.body.text
            }
        })
    } catch(err){
        console.log(err)
        res.status(500).send(
            {msg: "Could not update entry"}
        )
    }
})

//DELETE entry.
router.delete('/api/entry/:id', secureRouteUserOrAdmin, async (req, res) => {
    try{
        const id = req.params.id
        const entry =  await Entry.findById(id)
        const path = `./${entry.image}`

        Entry.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(401).send({msg: 'could not find entry to delete'})
            }
            fs.unlink(path, (err) => {
                if (err) {
                    console.error(err)      
                }
            })
        })
        res.status(200).send('It is now gone forever')
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            error: err
        })
    }
})

function secureRouteUserOrAdmin(req, res, next){
    if(!req.session.username){
        return res.status(401).json({msg: "Login to continue."})
    }

    Entry.findOne({_id: req.params.id}, function(err, entry){
        if(err) return res.status(400).json(err.message)

        if(entry){
            if(entry.username === req.session.username || req.session.role === "admin"){
                next()
            } else {
                res.status(401).json({msg: "Wrong user - login with correct user or admin account."})
            }
        } else {
            res.status(404).json({msg: "Could not find entry."})
        }
    })
}

function secureRouteAnyUser(req, res, next){
    if(!req.session.username){
        return res.status(401).json({msg: "Login to continue."})
    }
    if(req.session.username || req.session.role === "admin"){
        next()
    } else {
        res.status(401).json({msg: "Wrong user - log in with correct user or admin."})
    }
}

module.exports = router