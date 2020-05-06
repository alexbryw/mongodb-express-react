const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/lab3', {useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Connected to DB.')
})