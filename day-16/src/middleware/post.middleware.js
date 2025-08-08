const jwt  = require('jsonwebtoken')
const authModel = require('../model/auth.model')


async function  authMiddleware(req,res ,next){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"user token is expire please go and login again"
        })
    }
    try{
        const decode = jwt.verify(token , process.env.JWT_SECRET_KEY)
        const user = await authModel.findOne({
            _id : decode.id
        })
    req.user = user
    next()  
    }
    catch(err){
       return res.status(400).json({
        message:"user token exit but token are not write "
       })
        
    }
}

module.exports = {authMiddleware}
















