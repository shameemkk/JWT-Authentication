const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken =(req,res,next)=>{
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.status(401).send('Access Denied. No token provided.')
    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        
    } catch (error) {
        
    }
}