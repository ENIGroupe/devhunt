const jwt = require('jsonwebtoken')

const authMiddleware = (req , res , next) => {
    const token = req.header("Authorization")
    if(!token){
        return res.status(401).json({ errro: "Access denied"})
    }
    try {
        const verified = jwt.verify(token , process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (e) {
        res.status(400).json({ error: "Invalid token"})
    }
}

module.exports = authMiddleware;