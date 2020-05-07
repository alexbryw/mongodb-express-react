const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userModel = require('./models/User.model')
mongoose.connect('mongodb://localhost/lab3', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})


let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Connected to DB.')
})

addDefaultUsers()

//Default admin user with password: 'admin' added to db.
async function addDefaultUsers(){
    const cryptPassword = await bcrypt.hash("admin", 10)
    const userFound = await userModel.findOne({username: "admin"})
    if(!userFound){
        const user = new userModel({username: "admin", password: cryptPassword, admin: true})
        user.save(function (err, user){
            if(err) return console.log(err.message)
            console.log("Default user admin added to database.")
        })
    } else {
        // console.log("User 'admin' is in database.")
    }
}