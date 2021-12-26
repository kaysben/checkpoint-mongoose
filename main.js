const express = require('express')
const connectDb = require('./config/connectDb')
const ContactRoute = require('./routes/contact')
const app = express()
require("dotenv").config()
connectDb()


app.use(express.json())
app.use("/api/contacts",ContactRoute)
















const port = 5666 

app.listen(process.env.port,()=>console.log (`port is running on port ${process.env.port}`))