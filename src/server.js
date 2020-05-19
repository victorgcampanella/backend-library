const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()
app.use(cors())

mongoose.connect('mongodb+srv://library:library2020@library-oqzqb.mongodb.net/library?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)