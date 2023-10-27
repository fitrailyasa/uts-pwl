import React, { useState, useEffect } from 'react';
import { addProduct, deleteProduct, updateProduct } from './api'; // Gantilah dengan impor yang sesuai

function ProductManagement() {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: 0,
        stock: 0,
    });

    const [products, setProducts] = useState([]); // State untuk daftar produk
    const [selectedProductId, setSelectedProductId] = useState(null);

    // Fungsi untuk menambah produk baru
    const handleAddProduct = () => {
        addProduct(newProduct)
            .then((response) => {
                // Tangani respons dari backend (contoh: perbarui daftar produk setelah penambahan)
                setProducts([...products, response.data]);
                setNewProduct({ name: '', price: 0, stock: 0 });
            })
            .catch((error) => {
                // Tangani kesalahan jika ada
            });
    };

    // Fungsi untuk menghapus produk
    const handleDeleteProduct = (productId) => {
        deleteProduct(productId)
            .then(() => {
                // Tangani respons dari backend (contoh: perbarui daftar produk setelah penghapusan)
                setProducts(products.filter((product) => product.id !== productId));
            })
            .catch((error) => {
                // Tangani kesalahan jika ada
            });
    };

    // Fungsi untuk memperbarui detail produk
    const handleUpdateProduct = () => {
        updateProduct(selectedProductId, newProduct)
            .then((response) => {
                // Tangani respons dari backend (contoh: perbarui data produk yang diperbarui)
                const updatedProducts = products.map((product) =>
                    product.id === selectedProductId ? response.data : product
                );
                setProducts(updatedProducts);
                setSelectedProductId(null);
                setNewProduct({ name: '', price: 0, stock: 0 });
            })
            .catch((error) => {
                // Tangani kesalahan jika ada
            });
    };

    // Fungsi untuk memilih produk yang akan diperbarui
    const handleEditProduct = (product) => {
        setSelectedProductId(product.id);
        setNewProduct({ ...product });
    };

    useEffect(() => {
        // Mengambil daftar produk saat komponen dimuat
        getProducts()
            .then((response) => {
                // Set daftar produk ke dalam state
                setProducts(response.data);
            })
            .catch((error) => {
                // Tangani kesalahan jika ada
            });
    }, []);

    return (
        <div>
            <h2>Manajemen Produk</h2>
            <div>
                <h3>Tambah Produk Baru</h3>
                <input
                    type="text"
                    placeholder="Nama Produk"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Harga"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Stok"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
                <button onClick={handleAddProduct}>Tambah Produk</button>
            </div>
            <div>
                <h3>Daftar Produk</h3>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <span>{product.name}</span>
                            <button onClick={() => handleEditProduct(product)}>Edit</button>
                            <button onClick={() => handleDeleteProduct(product.id)}>Hapus</button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedProductId && (
                <div>
                    <h3>Edit Produk</h3>
                    <input
                        type="text"
                        placeholder="Nama Produk"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Harga"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Stok"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    />
                    <button onClick={handleUpdateProduct}>Perbarui Produk</button>
                </div>
            )}
        </div>
    );
}

export default ProductManagement;
