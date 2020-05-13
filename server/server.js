const express = require('express')
const cookieSession = require('cookie-session')
const app = express()
require('./connection') //Establish connection to mongodb.
const cors = require('cors') // Needed for cross origin.
const port = 9000   //API server port.

const userRoute = require('./routers/user')
const entryRoute = require('./routers/entry')
const loginRoute = require('./routers/login')

app.use(cors())
app.use(cookieSession({
    secret: 'secretKey',
    maxAge: 1000 * 45, //45 sec cookie timeout.
    sameSite: 'strict',
    httpOnly: true,
    secure: false
}))
app.use(express.json())
app.use('/uploads', express.static('uploads'))
//loginRoute should be above userRoute so delete logout works before delete user.
app.use(loginRoute) 
app.use(userRoute)
app.use(entryRoute)

app.get('/', (req, res) => res.json({someText: 'From express API! 9000!'}))

app.listen(port, () => console.log(`Server http://localhost:${port}`))