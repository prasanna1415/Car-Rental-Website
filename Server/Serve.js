const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;



app.use("/signup",require("./routes/signUp"));
app.use("/signin",require("./routes/signIn"));

app.listen(port,()=>{
    console.log(`LIstening in ${port}`);
})

