require("dotenv").config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes)

app.use("/api" , productRoutes)



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    try {
        console.log('Server connected')  
    } catch (e) {
        console.log('error :' . e)
    }
})