require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product");
const app = express();
const connectDB = require("./DB/connect");
const port = process.env.PORT || 3000;

const products_routes = require("./routes/products");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server Started at ${port} DB Connected`));
    }
    catch (err) {
        console.log(err)
    }
}

start();


app.get("/", (req, res) => {
    res.send("Hi I am Live");
})

app.post("/products", async (req, res) => {
    const product = new product(req.body);
    const result = await product.save();
    res.send(result);
})

app.get("/products", async (req, res) => {
    const products = await product.find({});
    res.send(products);
    
})


app.use("/api", products_routes)