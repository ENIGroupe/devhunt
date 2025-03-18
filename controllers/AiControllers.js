const { chatWithIA } = require('@models/AiModels.js')

const HandleChat = async (req , res) => {
    try {
        const userPrompt = req.body.prompt 
        const response = await chatWithIA(userPrompt)
        res.json({response})
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

module.exports = {
    HandleChat
}