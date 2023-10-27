import React, { Component } from 'react';

class ProductDetails extends Component {
    render() {
        const { product } = this.props;

        return (
            <div>
                <h1>Detail Produk</h1>
                <p>Nama: <strong>{product.name}</strong></p>
                <p>Harga: ${product.price}</p>
                <p>Stok: {product.stock}</p>
                <a href="/products">Kembali ke Daftar Produk</a>
            </div>
        );
    }
}

export default ProductDetails;
