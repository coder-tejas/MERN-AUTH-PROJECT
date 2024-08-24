const mongoose = require("mongoose");
// GvIEln0uM7gvgpuy
const  mongo_url = process.env.MONGO_CONN;
mongoose.connect(mongo_url)
.then(()=>{
    console.log("MONGOOOOO...");
}).catch((err)=>{console.log("ERROR CODE",err);
})
