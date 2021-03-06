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

async function addDefaultUsers(){
    const cryptPassword = await bcrypt.hash("admin", 10);
    const userFound = await userModel.findOne({username: "admin"});
    if(!userFound){
        const user = new userModel({username: "admin", password: cryptPassword, admin: true})

        user.save(function (err, user){
            if(err) return console.log(err.message)
            console.log("Default user1(u: admin, p:admin) added to database.")
        })
    }
}