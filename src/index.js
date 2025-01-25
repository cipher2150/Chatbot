import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO db connection error ", error);
})  















/*

import express from "express"
//; is used before just in case if we miss ; in previous line of code
//after ; () is called effi which immidiately run function written inside it

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERRR ", error);
            throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR: ", error);
        throw err 
    }
})()
    */