const { OpenAI } = require("openai");
require('dotenv').config()
// vapi

const baseURL = "https://api.aimlapi.com/v1";

// Insert your AIML API Key in the quotation marks instead of my_key:
const apiKey = process.env.OPENAI_API_KEY; 

const systemPrompt = "Tu es un mec sympa";
const userPrompt = "Comment va tu";

const api = new OpenAI({
  apiKey,
  baseURL,
});

const main = async () => {
  const completion = await api.chat.completions.create({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 256,
  });

  const response = completion.choices[0].message.content;

  console.log("User:", userPrompt);
  console.log("AI:", response);
};

main();