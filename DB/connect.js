const mongoose = require('mongoose');

MONGO_URI = "mongodb+srv://ranjit:Ranjit1234@cluster0.szk3lvs.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
   return mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

    } 

module.exports = connectDB;