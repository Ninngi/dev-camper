const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: './config/cofig.env'})
const PORT = process.env.PORT || 5001

const app = express()





app.listen(
    PORT,
    console.log(`Server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`)
)