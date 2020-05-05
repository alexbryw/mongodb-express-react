const express = require('express')
const app = express()
const cors = require('cors')
const port = 9000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => res.json({someText: 'From express API! 9000!'}))

app.listen(port, () => console.log(`Server http://localhost:${port}`))