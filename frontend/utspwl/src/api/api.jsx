import axios from 'axios';

// Fungsi untuk menambahkan produk baru
const addProduct = (newProduct) => {
    return axios.post('/products/add', newProduct);
};

// Fungsi untuk mengambil daftar produk
const getProducts = () => {
    return axios.get('/products');
};

// Fungsi untuk menghapus produk
const deleteProduct = (productId) => {
    return axios.post('/products/delete', { productId });
};

// Fungsi untuk memperbarui detail produk
const updateProduct = (productId, updatedData) => {
    return axios.post(`/products/update/${productId}`, updatedData);
};

// Fungsi untuk menghitung total harga produk yang dipilih
const calculateTotalPrice = (selectedProductIds) => {
    return axios.post('/products/calculate_total_price', { selectedProductIds });
};

// Fungsi untuk mengambil detail produk
const getProductDetails = (productId) => {
    return axios.post('/products/get_product_details', { productId });
};

export { addProduct, getProducts, deleteProduct, updateProduct, calculateTotalPrice, getProductDetails };