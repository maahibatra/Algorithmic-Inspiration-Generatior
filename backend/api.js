const fetch = require('node-fetch');

async function generateIdeas(prompt) {
    const model = 'Qwen/Qwen2.5-Coder-32B-Instruct';

    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.hFKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: prompt })
    });

    const data = await response.json();
    if (data && data[0] && data[0].generated_text) {
        const ideas = data[0].generated_text.split('\n').filter(task => task.trim());
        return ideas;
    } else {
        console.error('Error generating ideas:', data);
        return [];
    }
}