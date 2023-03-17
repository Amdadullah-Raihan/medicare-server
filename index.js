
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

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
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xplq2xb.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        const database = await client.db("mediCareDB");
        console.log("database connected");
        const doctorsCollection = database.collection('doctors');
        

    }
    finally{
        // await client.close()
    }
}
run().catch(console.dir)