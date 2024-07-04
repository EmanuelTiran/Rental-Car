const { connectToMongo } = require("./src/models/connectToMongo");
const { insertCars } = require("./src/insertCars");
const { insertCustomers } = require("./src/insertCutomers");

const express = require("express"),
    app = express();
// require("./DL/test_data").go()
require("dotenv").config() // 
app.use(require('cors')());
process.env.MONGO_URI;
app.use(express.json())

app.use("/customer", require('./src/routes/customerRouter'))
app.use("/cars", require('./src/routes/carRouter'))
app.use("/orders", require('./src/routes/orderRouter'))

connectToMongo()
// insertCars();
// insertCustomers();
app.listen(5050, () => console.log("The server is runnig on port 5050..."));
