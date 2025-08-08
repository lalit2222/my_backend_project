const mongoose = require('mongoose')



const authSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        
    },
    password:{
        type:String,
        require:true,
        unique:true
    }
})

const authModel = mongoose.model("auth",authSchema)

module.exports  = authModel