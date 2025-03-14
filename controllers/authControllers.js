const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {createUser , findUserByEmail} = require('../models/userModels')

const register = async (req , res) => {
    const {email , password} = req.body
    
    try {
        const existingUser = await findUserByEmail(email)
        if(existingUser) {
            return res.status(400).json({ error: "User already exist "})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await createUser(email, hashedPassword)
        return res.status(201).json({ message: "User register successfuly "})
    } catch (e) {
        return res.status(400).json({ error: "User not register error "})
    }
}

const login = async (req , res) => {
    const {email , password} = req.body 
    try {
        const user = await findUserByEmail(email)
        if(!user) {
            return res.status(404).json({ error: "User not found"})
        }
        const validPassword = await bcrypt.compare(password , user.password)
        if(!validPassword) {
            return res.status(404).json({ error: "Invalid password!"})
        }
        // token 
        const token = jwt.sign(
            { userId: user.id}, 
            process.env.JWT_SECRET, 
            {expiresIn: "1h"}
        )

        return res.json({token})
    } catch(e) {
        return res.status(500).json({ error: "Internal server error"})
    }
}

module.exports = {
    register,
    login
}