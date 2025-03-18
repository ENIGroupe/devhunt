const { OpenAI } = require("openai");
require('dotenv').config()
// vapi

const baseURL = "https://api.aimlapi.com/v1";
const apiKey = process.env.OPENAI_API_KEY; 

const api = new OpenAI({
  apiKey,
  baseURL,
});

const systemPrompt = "Tu es chaleureux"
const userPrompt = "bonjour"

const chatWithIA = async () => {
  const completion = await api.chat.completions.create({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      { role: "system", content: systemPrompt, },
      { role: "user", content: userPrompt, },
    ],
    temperature: 0.7,
    max_tokens: 256,
  });
  cons

  const response = completion.choices[0].message.content;
};

chatWithIA