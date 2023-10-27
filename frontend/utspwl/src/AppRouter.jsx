import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductManagement from './components/ProductManagement';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/product-management" element={<ProductManagement />} />
        </Routes>
    );
}

export default AppRouter;
