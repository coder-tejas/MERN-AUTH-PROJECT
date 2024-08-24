const express  = require("express")
const app =   express();
const cors = require("cors");
const bodyParser = require("body-parser");
const  AuthRouter = require("./routes/AuthRouter")

require('dotenv').config();
require("./models/db")


const PORT =  process.env.PORT || 3001;
app.get("/",(req,res)=>{
    res.end("hi from server")
})


app.use(bodyParser.json())  ;
app.use(cors({
    origin: '*', // replace with your frontend's origin
    methods: 'GET,POST',
    credentials: true // if you're using cookies/authentication
})); 
app.use('/auth', AuthRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
    
})