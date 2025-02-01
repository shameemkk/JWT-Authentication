const mongoose = require("mongoose");

const uri = process.env.DB_URL || "mongodb://localhost:27017"

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB Connected!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
