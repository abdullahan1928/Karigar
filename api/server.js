const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
// process.env.Port will be the port when it will be hosted or else used local port
const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
// adding middlewares in the application
// .json is used to convert everything in json format
app.use(express.json());
// cors is used to protect the cors error
app.use(cors());

// register the routes
app.use("/api/auth", authRoutes);
// this route will further lead to login or register

const server = http.createServer(app);
// connnecting with mongoDB
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,useUnifiedTopology:true,}).then(()=>{
  console.log("Connected to MongoDb and server started") 
  }).catch((err)=>console.log(`somer error occur ${err}`));

  app.listen(PORT,()=>{
    console.log("Backend server is running");
      
  })