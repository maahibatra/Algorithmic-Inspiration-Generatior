const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/api/generate-ideas', async (req, res) => {
    const prompt = req.body.prompt || "Generate inspiration of creative things to do. Limit to 5 items, be precise. Cut out the prompt.";

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
            const ideas = generatedText.split('\n').filter(line => line.trim());

            res.status(200).json(ideas);
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
