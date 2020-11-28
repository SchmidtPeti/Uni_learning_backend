require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./db');
const apiPort = 3000;

const matalapTaskRouter = require('./routes/matalap_task-router');
const { json } = require('body-parser');
const generalTaskRouter = require('./routes/general_task-router');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/',(req,res)=> {
    res.send('Uni_learning server is on!');
})

app.use('/api',matalapTaskRouter);
app.use('/api',generalTaskRouter);

app.listen(process.env.PORT || apiPort,() => console.log(`Completed on ${apiPort}`));