const express = require("express");
const app = express();

const {config} = require("dotenv");
config();

const cors = require("cors");
const mongo = require("./Models/Mongo");

const loginRoute = require("./Routes/login.route");
const productRoute = require("./Routes/orderedProduct.route");
app.listen(process.env.PORT,()=>{
    console.log("Connected to server" + process.env.PORT);
})

async function loadApp() {
    try {
        await mongo.connect();
        app.use(cors());
        app.use(express.json());
        app.use("/",loginRoute);
        app.use("/",productRoute);
    } catch (err) {
        console.error(err);
        process.exit();
    }
}

loadApp();