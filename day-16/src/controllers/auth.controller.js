const { message } = require('prompt')
const authModel = require('../model/auth.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



 async function registerUser(req,res){
    const {username , password} = req.body
   

const isUserExit = await authModel.findOne({
    username
})
if(isUserExit){
   return res.status(400).json({
        message:"username exit "
    })
}
const user = await authModel.create({
    username,
    password:await bcrypt.hash(password,10)
})

const token = jwt.sign({id : user._id},process.env.JWT_SECRET_KEY)

res.cookie("token",token)

return res.status(200).json({
    message:"user register sucessfully",
    user
})

}

async function loginUSer(req,res){
    const {username, password} = req.body

    const isUserFind = await authModel.findOne({
        username
    })
  
    if(!isUserFind){
      return   res.status(404).json({
            message:"usesrname does not exit"
        })
    }
  
    const isPasswordExit =await bcrypt.compare(password,isUserFind.password)

    if(!isPasswordExit){
       return    res.status(400).json({
        message:"user password does not correct"
       })
    }

  const token =   jwt.sign({id:isUserFind._id},process.env.JWT_SECRET_KEY)
  res.cookie("token",token)

return res.status(200).json({
    message:"user login sucessfully"
})


}



module.exports = {
    registerUser,
    loginUSer
}