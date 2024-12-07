const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/api/generate-ideas', async (req, res) => {
    const prompt = "Generate inspiration only on the prompt " + req.body.prompt.trim() + ". 7-10 words per item, each item in a new line.";
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct',
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${process.env.hFKey}`,
                },
            }
        );

        console.log("Hugging Face API Response:", response.data);

        const generatedText = response.data[0]?.generated_text;

        if (generatedText) {
            const cleanText = generatedText.split('\n').slice(1).join('\n').trim();
            const ideas = cleanText
                .split('\n')
                .filter(line => line.trim())
                .map(line => 
                    line
                        .replace(/^[\d\-\*\)\.]+\s*/, '')
                        .replace(/[^a-zA-Z0-9.,'!? ]+/g, '')
                        .trim()
                );

            const limitedIdeas = ideas.slice(0, 5);

            res.status(200).json(limitedIdeas);
        } else {
            res.status(500).json({ error: 'No ideas generated.' });
        }
    } catch (error) {
        console.error('Error calling Hugging Face API:', error.response || error);
        res.status(500).json({ error: 'Error processing your request' });
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
