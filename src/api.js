import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data.products;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

// Implement other CRUD operations as needed
