import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        const { products, onDetailClick } = this.props;

        return (
            <div>
                <h1>Daftar Produk</h1>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <strong>{product.name}</strong> - Harga: ${product.price} - Stok: {product.stock}
                            <button onClick={() => onDetailClick(product.id)}>Detail</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProductList;
