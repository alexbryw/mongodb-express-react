const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userModel = require('./models/User.model')
mongoose.connect('mongodb://localhost/lab3', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})


let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Connected to DB.')
})

addDefaultUsers()

//Default admin user with password: 'admin' added to db.
async function addDefaultUsers(){
    addUser("admin","admin",true)
    addUser("Leif","123456",false)
    addUser("Roger","123456",true)

}

//Input string username, string password, boolean isAdmin.
async function addUser(username, password, isAdmin){
    const cryptPassword = await bcrypt.hash(password, 10)
    const userFound = await userModel.findOne({username: username})
    if(!userFound){
        const user = new userModel({username: username, password: cryptPassword, admin: isAdmin})
        user.save(function (err, user){
            if(err) return console.log(err.message)
            console.log("Default user " + username +" added to database.")
        })
    } else {
        // console.log("Default user " + username + " is in database.")
    }
}