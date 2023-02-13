import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom'

//redux
import store from "./redux/store";
import { Provider } from "react-redux";

//component
import Store from "./components/store/Store";
import ProductDetails from "./components/product-detail/ProductDetails";
import Navbar from "./components/navbar/Navbar";
import ShopCart from "./components/shop-cart/ShopCart";

function App() {
  return (
        <Provider store={store}>
          <Navbar/>
          <Routes>
            <Route path='/products/:id' element={<ProductDetails/>} /> 
            <Route path='/products' element={<Store/>}/>
            <Route path='/cart' element={<ShopCart/>} />
            <Route path='/*' element={<Navigate to='/products'/>}/>
          </Routes>
        </Provider>   
  );
}

export default App;
