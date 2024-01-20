require("dotenv").config();
const express = require("express");
const app = express();
const cors= require("cors");
const port = 4009;
require("./db/conn");
app.use(cors());
app.use(express.json());
//admin routes
const adminAuthrouter= require("./routes/admin/adminAuthroutes");
app.use("/adminauth/api",adminAuthrouter);


app.get("/",(req,res)=>{
      res.status(200).json("server start");
})

//start server
app.listen(port,()=>{
      console.log(`server start at port no: ${port} `);
})