import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import userRouter from "./routes/userRoute.js"

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// API END-POINT
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/user", userRouter)

const PORT = process.env.PORT || 8000
connectDB()
connectCloudinary()
app.listen(PORT, ()=>{
    console.log(`Server started at PORT ${PORT}`)
})