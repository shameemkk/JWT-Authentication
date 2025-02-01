const express =require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

router.get('/info',verifyToken,(req,res)=>{
    res.json({message:'Hello, world!'})
})
module.exports = router
