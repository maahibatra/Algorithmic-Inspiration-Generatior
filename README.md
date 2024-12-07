# Algorithmic Inspiration Generator (AIG)

The **Algorithmic Inspiration Generator (AIG)** is a creative tool that uses AI to generate innovative ideas based on your prompts! It leverages Hugging Face's NLP models to generate algorithmic and programming-related ideas, helping you spark creativity.

## Features

- **Idea Generation**:
    - Generate algorithmic ideas based on a user-defined prompt.

- **Save Ideas**:
    - Save your generated ideas to local storage for later reference.

- **AI-Powered Inspiration**:
    - Receive inspiration from AI based on a prompt you enter. Whether it's for coding, algorithms, or general creativity, the AI provides suggestions!

## Usage
- Enter a prompt describing the type of idea you want to generate and click the **Generate** button.
- The AI will process your input and generate a list of related ideas, which will appear below the input field.
- You can select ideas from the list and click **Save Selected Ideas** to store them locally.
- A popup will confirm whether your ideas were saved successfully.
  
## NOTE
- The project is currently local-based for simplicity. It is not yet deployed to a live environment, but feel free to clone and run it locally.
- Watch a video demo here: ADD VIDEO LINK HERE.

## Prerequisites
- Node.js (>= v16.0.0)
- npm
- A Hugging Face account

### Hugging Face:
- On Hugging Face, go to **Access Tokens**.
- Create a new access token with **read permissions**.
- Copy and save it somewhere (you won't find it again!).

### Clone the repository:
```bash
git clone https://github.com/maahibatra/Algorithmic-Inspiration-Generatior
cd Algorithmic-Inspiration-Generator
```

### Backend:
- Navigate to the /backend directory:
```bash
cd backend
```
- Create a .env file in the /backend folder and add your Hugging Face API key:
```bash
hfKey=your_hugging_face_api_key
```
- Start the backend server:
```bash
npm run dev
```
- The server will run on http://localhost:5000.

### Frontend:
- Start the frontend React app:
```bash
npm start
```
- The app will be available at a http://localhost:3000.

## HAVE FUN!!!!