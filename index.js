import fs from 'fs';
import path from 'path'; // Module to handle file paths
import OpenAI from 'openai';
import 'dotenv/config'; // Automatically loads environment variables from .env file

// Initialize the OpenAI client using the API key from the environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Transcribes an audio file, detects its language, and saves the text to a file.
 * 
 * @param {string} filePath - The path to the local audio file.
 */
async function processAudioAndSave(filePath) {
  try {
    // Check if the audio file exists before making the API call
    if (!fs.existsSync(filePath)) {
      throw new Error("Audio file not found! Please check the file path.");
    }

    console.log('Sending audio file to OpenAI Whisper API. Please wait...');

    // Call the OpenAI Audio Transcriptions API
    const response = await openai.audio.transcriptions.create({
      file: fs.createReadStream(filePath), // Read the file as a stream
      model: 'whisper-1',                  // The highly accurate AI model for audio processing
      response_format: 'verbose_json',     // This format includes detailed metadata
    });

    // Extract the detected language code and the transcribed text
    const detectedLanguage = response.language;
    const transcribedText = response.text;

    // --- New Feature: Save to File ---

    // Parse the audio file path to generate a text file name with the same base name
    // Example: './sample-audio.mp3' becomes './sample-audio.txt'
    const parsedPath = path.parse(filePath);
    const outputFilePath = path.join(parsedPath.dir, `${parsedPath.name}.txt`);

    // Write the transcribed text to the new .txt file
    fs.writeFileSync(outputFilePath, transcribedText, 'utf-8');

    // Print the results to the console
    console.log('\n--- Processing Complete ---');
    console.log(`Detected Language Code: ${detectedLanguage.toUpperCase()}`);
    console.log(`\nSuccess! The transcription has been saved to: ${outputFilePath}`);

  } catch (error) {
    // Handle and display any errors that occur during the process
    console.error('\nError processing the audio file:', error.message);
  }
}

// ---------------------------------------------------------
// Execution
// ---------------------------------------------------------

// Define the path to your audio file
const audioFilePath = './sample-audio.wav';

// Run the function
processAudioAndSave(audioFilePath);