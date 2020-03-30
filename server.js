const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
dotenv.config({
    path: './config/config.env'
})
const morgan = require('morgan')
const conncetDB = require('./config/db')
// Route files
const bootcamps = require('./routes/bootcamps')
const PORT = process.env.PORT || 5001

conncetDB();

const app = express()


if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))


app.use('/api/v1/bootcamps', bootcamps)

app.listen(
    PORT,
    console.log(`Server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)

process.on('unhandledRejection', (err, promise) => {
    console.log("\x1b[35m", `ErrorL ${err.message}`)
    ServiceWorkerRegistration.close(()=> process.exit(1))
})