require("dotenv").config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    try {
        console.log('Server connected')  
    } catch (e) {
        console.log('error :' . e)
    }
})