
import axios from 'axios';

const API_URL = 'https://mujeep-service.onrender.com'; // غيّره بالرابط الحقيقي

// Function to send a message to the Mujeeb service and get a reply.
export const sendToMujeeb = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.reply;
  } catch (error) {
    console.error('❌ An error occurred:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return `An error occurred: ${error.response.status} ${error.response.data}`;
    } else if (error.request) {
      // The request was made but no response was received
      return 'An error occurred: No response from server. Please try again later.';
    } else {
      // Something happened in setting up the request that triggered an Error
      return 'An error occurred: Could not make request. Please check your network connection.';
    }
  }
};
