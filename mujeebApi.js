
import axios from 'axios';

const API_URL = 'https://mujeep-service.onrender.com'; // غيّره بالرابط الحقيقي

export const sendToMujeeb = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.reply;
  } catch (error) {
    console.error('❌ خطأ:', error);
    return 'حدث خطأ. حاول مرة أخرى.';
  }
};
