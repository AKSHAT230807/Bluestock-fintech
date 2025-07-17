import axios from 'axios';

// Choose the appropriate BASE_URL based on your setup:

// Option 1: For Android Emulator
// const BASE_URL = 'http://10.0.2.2:8000';

// Option 2: For iOS Simulator or localhost testing
// const BASE_URL = 'http://127.0.0.1:8000';
// const BASE_URL = 'http://localhost:8000';

// Option 3: For Real Device (using your computer's IP)
const BASE_URL = 'http://10.237.27.201:8000';

// Option 4: For production/deployed backend
// const BASE_URL = 'https://your-domain.com';

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const apiService = {
  // Test connection
  testConnection: async () => {
    try {
      const response = await api.get('/api/test/');
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Send data to backend
  sendData: async (data) => {
    try {
      const response = await api.post('/api/test/', data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};

export default api;