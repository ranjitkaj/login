const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String,
    phone: Number,
    address: String,
    description: String,
    createdat: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Product', productSchema)