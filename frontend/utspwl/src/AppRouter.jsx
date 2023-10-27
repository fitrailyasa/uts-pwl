// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProductList} />
                <Route path="/products/:id" component={ProductDetails} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
