import axios from 'axios';
const fetchProducts = async () => {
  try {
    // const response = await axios.get('/Api.json'); // Fetches the JSON from public folder
    const response = await axios.get('https://cdn.drcode.ai/interview-materials/products.json');
    const products = response.data.products;
    // console.log(products);
    return Object.values(products); // Convert object to array
  } catch (error) {
    throw new Error('Failed to fetch products. Please try again later.');
  }
};
export default fetchProducts
