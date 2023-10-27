import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ProductManagement from './pages/ProductManagement';
import AddProductForm from './pages/AddProductForm';
import UpdateProductForm from './pages/UpdateProductForm';
import ShoppingCart from './pages/ShoppingCart';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/product-management" element={<ProductManagement />} />
            <Route path="/add-product" element={<AddProductForm />} />
            <Route path="/update-product/:productId" element={<UpdateProductForm />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
    );
}

export default AppRouter;
