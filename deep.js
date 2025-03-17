const {OpenAI} = require('openai')
require('dotenv').config()


const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

async function getResponse(){
    const response = await openai.chat.completions.create({
        model: "deepseek-chat",
        messages: [{ role: "system", content: "You are a helpful assistant"}]
        
    })

    console.log(response.choices[0].message.content)
}

main()