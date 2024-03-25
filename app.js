const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.static('./public'))
// Парсинг данных в формате JSON
app.use(express.json());

const PORT = process.env.PORT || 3000
//routes
app.use('/api/v1/tasks/', tasks)
app.use(notFound)
app.use(errorHandler)
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT)
        console.log(`Server is listening on port ${PORT}`)
    } catch (err) {
        console.log(err)

    }
}

start()
