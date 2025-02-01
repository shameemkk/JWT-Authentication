require("dotenv").config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const connectDB = require("./config/db")


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// database connction
connectDB()

// Routes
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});