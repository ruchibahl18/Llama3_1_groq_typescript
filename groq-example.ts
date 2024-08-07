import Groq from 'groq-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: 'Who is Mr Beast?' }],
    model: 'llama-3.1-8b-instant',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();