const mongoose = require('mongoose');

require('dotenv').config();//it use for store database url into process object

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{

    })
    .then(()=>console.log('DB ho gaya connect'))
    .catch((error) => {
        console.log('Issue in Db Connection');
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;