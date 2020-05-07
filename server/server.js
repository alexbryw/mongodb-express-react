const express = require('express')
const app = express()
require('./connection') //Establish connection to mongodb.
const cors = require('cors') // Needed for cross origin.
const port = 9000   //API server port.

const userRoute = require('./routers/user')
const entryRoute = require('./routers/entry')
const loginRoute = require('./routers/login')

app.use(cors())
app.use(express.json())
app.use(userRoute)
app.use(loginRoute)
app.use(entryRoute)

app.get('/', (req, res) => res.json({someText: 'From express API! 9000!'}))

app.listen(port, () => console.log(`Server http://localhost:${port}`))