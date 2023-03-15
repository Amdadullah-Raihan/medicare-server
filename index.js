
const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

//midleware
app.use(cors())
app.use(express.json())


//root api
app.get('/', (req, res) => {
    res.send('Responding from MediCare server!')
})

//lesting
app.listen(port, () => {
    console.log(`Listening to port, ${port}`)
})

//mongodb connection
