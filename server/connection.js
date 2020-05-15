const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userModel = require('./models/User.model')
const entryModel = require('./models/Entry.model')
mongoose.connect('mongodb://localhost/lab3', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})


let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Connected to DB.')
})

addDefaultUsers()

async function addDefaultUsers(){
    const cryptPassword = await bcrypt.hash("admin", 10);
    const cryptPassword2 = await bcrypt.hash("password", 10);
    const cryptPassword3 = await bcrypt.hash("hemligt", 10);
    const userFound = await userModel.findOne({username: "admin"});
    if(!userFound){
        const user = new userModel({username: "admin", password: cryptPassword, admin: true})
        const user2 = new userModel({username: "password", password: cryptPassword2, admin: false})
        const user3 = new userModel({username: "K3nn3tt123", password: cryptPassword3, admin: false})

        user.save(function (err, user){
            if(err) return console.log(err.message)
            console.log("Default user1(u: admin, p:admin) added to database.")
        })

        user2.save(function (err, user2){
            if(err) return console.log(err.message)
            console.log("Default user2(u: password, p:password) added to database.")

        })

        user3.save(function (err, user3){
            if(err) return console.log(err.message)
            console.log("Default user3(u: K3nn3tt123, p:hemligt) added to database.")
        })
    }
}

addDefaultEntries()

async function addDefaultEntries(){

    const userFound = await userModel.findOne({username: "admin"});//If tomt

    if(!userFound){

        //entryModel
        const entry = new userModel({username: "admin", password: cryptPassword, admin: true})
        const entry2 = new userModel({username: "password", password: cryptPassword2, admin: false})
        const entry3 = new userModel({username: "K3nn3tt123", password: cryptPassword3, admin: false})

        user.save(function (err, user){
            if(err) return console.log(err.message)
            console.log("Default user1(u: admin, p:admin) added to database.")
        })

        user2.save(function (err, user2){
            if(err) return console.log(err.message)
            console.log("Default user2(u: password, p:password) added to database.")

        })

        user3.save(function (err, user3){
            if(err) return console.log(err.message)
            console.log("Default user3(u: K3nn3tt123, p:hemligt) added to database.")
        })
    }
}