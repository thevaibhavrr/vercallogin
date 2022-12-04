const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());


//for get/post data in json formate
app.use(express.json())



//getting Secrat key  and mongodb key from config . env
dotenv.config({ path: "./config.env" });
app.use(require("./Routes/router.js"));
require("./DB/conn");


if(process.env.NODE_ENV == 'production'){
    app.use(express.static("client/build"))
}


// if (process.env.NODE_ENV == "production") {
//         const path = require('path')

//         app.get('/',(req,res)=>{
//             app.use(express.static(path.resolve(__dirname,'client','build')))
//             res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//         })

// }

//run server
app.listen(PORT,()=>{
    console.log('server is running on ' + PORT)
})