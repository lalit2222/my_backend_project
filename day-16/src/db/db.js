const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("connect to db");
        
    })
    .catch((err)=>{
        console.error("not connect to db" , err);
        
    })
}
module.exports = connectToDB