const express  = require('express');

const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

const Routes = require('./Routes/rotes');
//mount the todo ASPI routes 
app.use('/api/v1', Routes);




//start server
app.listen(PORT,() =>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database 
const dbConnect = require('./config/database');
dbConnect();


//default Route
app.get('/',(req,res) =>{
    res.send(`<h1>This is HomePage Baby</h1>`);
})

