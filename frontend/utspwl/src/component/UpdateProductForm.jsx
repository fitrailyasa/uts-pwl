import React, { Component } from 'react';

class UpdateProductForm extends Component {
    constructor() {
        super();
        this.state = { name: '', price: '', stock: '' };
    }

    componentDidMount() {
        const { product } = this.props;
        this.setState({ name: product.name, price: product.price, stock: product.stock });
    }

    handleInputChange(event, field) {
        this.setState({ [field]: event.target.value });
    }

    render() {
        const { onSubmit } = this.props;

        return (
            <div>
                <h2>Perbarui Produk</h2>
                <form onSubmit={() => onSubmit(this.state)}>
                    <label htmlFor="name">Nama Produk:</label>
                    <input type="text" name="name" required value={this.state.name} onChange={e => this.handleInputChange(e, 'name')} /><br />

                    <label htmlFor="price">Harga:</label>
                    <input type="number" name="price" required value={this.state.price} onChange={e => this.handleInputChange(e, 'price')} /><br />

                    <label htmlFor="stock">Stok:</label>
                    <input type="number" name="stock" required value={this.state.stock} onChange={e => this.handleInputChange(e, 'stock')} /><br />

                    <button type="submit">Perbarui Produk</button>
                </form>
            </div>
        );
    }
}

export default UpdateProductForm;
