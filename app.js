require("dotenv").config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
const aiRoutes = require('@routes/aiRoutes.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes)
app.use("/product" , productRoutes)
app.use("/ai" , aiRoutes)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    try {
        console.log('Server connected')  
    } catch (e) {
        console.log('error :' . e)
    }
})