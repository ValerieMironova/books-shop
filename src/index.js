import React from 'react';
import ReactDOM from 'react-dom';
import StartPage from "./features/StartPage";
import ProductPage from "./features/ProductPage";
import CartPage from "./features/CartPage";
import Footer from "./features/Footer";
import Header from "./features/Header";
import CustomMenu from "./features/CustomMenu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <CustomMenu/>
            <Switch>
                <Route path="/product/:productId" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/" component={StartPage}/>
            </Switch>
            <Footer/>
        </Router>
    </Provider>,
  document.getElementById('root')
);

