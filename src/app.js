import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}
))

app.use(express.json({limit:"16kb"}));// while data came from a file
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from './routes/user.routes.js';


//routes declaration

// app.use("/users", userRouter)
//STANDARD PRACTICES

app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register


export { app }