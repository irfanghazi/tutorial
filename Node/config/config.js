const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const url = process.env.DB_URL
mongoose.connect(url).then((res) => {
    console.log('mongodb connected');
}).catch((err) => {
    console.log(err);
})