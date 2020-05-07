const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({
    username: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
        maxlength: 140
    }
})

const Entry = mongoose.model('Entry', entrySchema)