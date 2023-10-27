import { Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import ProductManagement from './component/ProductManagement';

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
