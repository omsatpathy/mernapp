const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

//midware for errorHandling
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))