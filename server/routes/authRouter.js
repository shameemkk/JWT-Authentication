const express = require('express');
const jwt =require('jsonwebtoken');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/authModel');
const {verifyPassword, hashPassword} =require("../utils/argon2");

router.post('/register', async (req, res) => {
  try {
    
    const { userName, email, password } = req.body;
    if (!userName || !email || !password ) {
      return res.status(400).json({ error: "Check the input credentials" });
    }
    const hashedPassword=await hashPassword(password)
    const user = new User({
      userName:userName,
      email:email,
      password: hashedPassword
      });
      await user.save();
      res.status(201).send({userName,hashedPassword})
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
  
  
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Check the input credentials" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const payload={
      user:{
        id:user._id,
        userName:user.userName
      }
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({Username:user.userName, token: token});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
})
  
  
module.exports=router;