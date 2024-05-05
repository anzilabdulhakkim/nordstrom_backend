const express = require('express');
const app = express();
const connection = require('./config/db');
const userRoutes = require("./Routers/user");
const productRoutes = require("./Routers/product");
const cartRoutes = require("./Routers/cart");
const PORT = process.env.PORT || 9090;
const cors = require("cors");
require('dotenv').config();

app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, async()=>{
    try {
        await connection;
        console.log(`server is running on Port: ${PORT} and db is connected.`); 
    } 
    catch (error) {
        console.log(error);
    }
})