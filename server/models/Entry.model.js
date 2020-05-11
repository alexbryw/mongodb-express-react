const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
/* 
const imageUrl = entrySchema.virtual('imageUrl')
imageUrl.get(function(value, virtual, doc){
    return 'http://localhost:9000/' + doc.image
}) */

const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry