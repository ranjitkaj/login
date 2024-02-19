require('dotenv').config();
const connectDB = require('./DB/connect');
const Product = require('./models/product');


const ProductsJson = require('./products.json');
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        const products = await Product.create(ProductsJson);

        console.log("Successful");

    }
    catch (err) {
        console.log(err);

    }

}

start();




