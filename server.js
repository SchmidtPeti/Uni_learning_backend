require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./db');
const apiPort = 3000;

const matalapTaskRouter = require('./routes/matalap_task-router');


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/',(req,res)=> {
    res.send('Hello World!');
})

app.use('/api',matalapTaskRouter);

app.listen(apiPort,() => console.log(`Completed on ${apiPort}`));