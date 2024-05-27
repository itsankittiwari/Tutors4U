import express from "express";

const app = express();
import cors from 'cors';

import dotenv from "dotenv"


// dotenv.config({
//     path: './.env'
// })
dotenv.config();


const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors(   {
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// const Routes = require('./Routes/rotes');
import Routes from './Routes/rotes.js'
//mount the todo ASPI routes 
app.use('/api/v1', Routes);




//start server
app.listen(PORT,() =>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database 
import {dbConnect} from './config/database.js'
// const dbConnect = require('./config/database');
dbConnect();


//default Route
app.get('/',(req,res) =>{
    res.send(`<h1>This is HomePage Baby</h1>`);
})

