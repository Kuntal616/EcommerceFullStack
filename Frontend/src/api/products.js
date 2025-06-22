import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products'; // Adjust if your backend runs on a different port

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
