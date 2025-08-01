// require('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import connectDB from "./db/index.js";


// dotenv.config({
//     path: './env',
// });


// connectDB()



import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" }); // or just `dotenv.config();` if file is `.env`

connectDB();

// You can add express or app.listen here if needed








// import express from express;
// const app = express()

// ;(async () => {
//     try {
//         await mongoose.connect(`${ process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error", (error) => {
//             console.log("ERROR: ",error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("ERROR: ",error)
//         throw error
//     }
// })()