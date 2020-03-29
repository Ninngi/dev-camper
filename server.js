const express = require('express')
const dotenv = require('dotenv')
dotenv.config({
    path: './config/config.env'
})
const PORT = process.env.PORT || 5001

const app = express()



// Route files
const bootcamps = require('./routes/bootcamps')
// Mount Routers
app.use('/api/v1/bootcamps', bootcamps)



app.listen(
    PORT,
    console.log(`Server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`)
)