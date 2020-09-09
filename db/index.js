
const mongoose = require('mongoose')
const uri = process.env.DB_HOST;

mongoose
    .connect(uri, { useNewUrlParser: true,useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db