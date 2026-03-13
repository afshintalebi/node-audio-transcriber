# 🎙️ Node.js Audio Transcriber (Whisper API)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_Whisper-412991?style=for-the-badge&logo=openai&logoColor=white)

A lightweight, powerful, and highly accurate Node.js command-line application that uses **OpenAI's Whisper AI** to transcribe audio files, detect the spoken language, and automatically save the resulting text into a `.txt` file.

## ✨ Features

- **High Precision**: Powered by OpenAI's `whisper-1` model, capable of understanding slang, accents, and various languages (including RTL languages like Persian/Arabic) with incredible accuracy.
- **Auto Language Detection**: Automatically identifies the language spoken in the audio file.
- **Auto-Save functionality**: Extracts the base name of your audio file (e.g., `podcast.mp3`) and automatically generates a text file with the same name (`podcast.txt`) containing the transcription.
- **Simple & Fast**: Runs entirely in the terminal with minimal setup.

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed and ready:
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- An active [OpenAI API Key](https://platform.openai.com/api-keys)

## 🚀 Installation & Setup

1. **Initialize the Project**
   Create a new folder for your project, navigate into it, and initialize Node.js:
   ```bash
   mkdir audio-transcriber
   cd audio-transcriber
   npm init -y

2. **Install Required Packages**: 

   Install the official OpenAI SDK and the `dotenv` package (to manage API keys securely):

   ```bash
   npm install openai dotenv
   ```

3. **Enable ES Modules**: 

   Open your `package.json` file and add `"type": "module"` to the root object. It should look like this:

   ```json
   {
   "name": "audio-transcriber",
   "version": "1.0.0",
   "type": "module",
   "main": "index.js",
   "dependencies": {
         "dotenv": "^16.x.x",
         "openai": "^4.x.x"
      }
   }
   ```

4. **Configure Environment Variables**:

   Create a file named `.env` in the root directory of your project and paste your OpenAI API key inside:

   ```env
   OPENAI_API_KEY=sk-your-secret-openai-api-key-here
   ```

## 💡 Usage

1. Create a file named `index.js` and paste the main application code (provided in the tutorial) into it.
2. Place an audio file (e.g., `sample-audio.mp3`) inside the same folder.
3. Open `index.js` and ensure the `audioFilePath` variable points to your audio file's name:
   ```javascript
   const audioFilePath = './sample-audio.mp3';
   ```
4. Run the script via the terminal:
   ```bash
   node index.js
   ```
5. Result: The console will display the detected language, and a new `.txt` file (e.g., `sample-audio.txt`) will instantly appear in your folder containing the full text!

## 🗂️ Supported Audio Formats
The OpenAI Whisper API supports the following file extensions:
`mp3`, `mp4`, `mpeg`, `mpga`, `m4a`, `wav`, and `webm`.

## ⚠️ Important Notes

- **File Size Limit**: The maximum file size supported by a single API request is 25 MB. If your file is larger, you must split it into smaller chunks before processing.
- **API Costs**: Whisper API usage is billed by OpenAI at approximately $0.006 per minute of audio processed. Ensure you have enough credits in your OpenAI account.

## 📝 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it for personal or commercial projects.

## ⚖️ Legal Disclaimer & Acceptable Use

By downloading, running, or modifying this script, you agree to the following conditions:

1. **User Responsibility:** This tool acts solely as a client interface to the OpenAI API. The developer of this project holds **no responsibility** for the audio content you process or any consequences arising from its transcription.
2. **Copyright & Privacy Compliance:** You are strictly prohibited from using this tool to transcribe copyrighted material (e.g., premium audiobooks, paid courses, music) or confidential/private conversations without the explicit legal consent of all involved parties. 
3. **API Usage & Data:** Audio files processed by this script are transmitted directly from your local machine to OpenAI's servers. Please review [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use) regarding data privacy and acceptable use cases.
4. **"As Is" Basis:** This software is provided "as is", without warranty of any kind. The developer is not liable for API costs, account suspensions, or legal disputes incurred by the user.

