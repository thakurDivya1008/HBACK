// require('dotenv).config({path: './env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()





//************1st APPROACH */
// import express from "express"
// const app = express()
// // function connectDB(){}
// // connectDB()
// //More enhanced --> By using IIFE
// ;( async () => {
//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      application.on("error", (error) => {
//         console.log("ERRR:", error);
//         throw error
//      })

//      app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//      })
//     } catch(error){
//         console.log("ERROR", error)
//         throw err
//     }
    
// })()