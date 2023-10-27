import React, { useState } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]); // State untuk daftar produk dalam keranjang belanja

    // Fungsi untuk menambah produk ke keranjang belanja
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    // Fungsi untuk mengurangi jumlah produk dalam keranjang belanja
    const removeFromCart = (product) => {
        const updatedCart = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedCart);
    };

    return (
        <div>
            <h2>Keranjang Belanja</h2>
            <ul>
                {cartItems.map((product) => (
                    <li key={product.id}>
                        <span>{product.name}</span>
                        <button onClick={() => removeFromCart(product)}>-</button>
                        <span>1</span>
                        <button onClick={() => addToCart(product)}>+</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
