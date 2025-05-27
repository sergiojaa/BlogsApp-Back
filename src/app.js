import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.use(express.json())

mongoose
    .connect(process.env.DB_URI)
    .then(() => {
        console.log('Database connected successfully')
    }).catch(err => {
        console.error('Database connection error:', err)
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})