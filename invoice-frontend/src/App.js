import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import MyForm from './components/MyForm';
import ResumeBuilder from './components/ResumeBuilder';
import Invoice from './components/Invoice';
import DashboardLayout from './components/DashboardLayout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFood from './components/FoodWeb/NavbarFood';
import HomeFood from './components/FoodWeb/HomeFood';
import Items from './components/FoodWeb/Items';
import Cart from './components/FoodWeb/Cart';
import { useEffect, useReducer, useState } from 'react';
import Offers from './components/FoodWeb/Offers';
 import itemListReducer from './reducers/itemListReducer';
import useCart from './customHooks/useCart';
import offerReducer from './reducers/offerReducer';
import $ from "jquery";
import MyAccount from './components/FoodWeb/MyAccount';
import WishList from './components/FoodWeb/WishList';
function App() {
 const [initialItemList, setInitialItemList] = useState([]);
const [initialOffers, setInitialOffers] = useState([]);
const [categoryList, setCategoryList] = useState([]);


  const [itemList, dispatch] = useReducer(itemListReducer,[]);
  const {subTotal}=useCart(itemList);
  const charges=({subTotal:subTotal,deliveryCharges:13,govCharges:15});

   useEffect(() => {
  $.ajax({
    url: "http://localhost:90/foodAppList/initialItemList",
    type: "GET",
    success: function (response) {

      const itemsWithQty = response.items.map(item => ({
        ...item,
        qty: 0
      }));

      dispatch({
        type: "SET_ITEMS",
        payload: itemsWithQty
      });

      dispatchOffer({
        type: "SET_OFFERS",
        payload: response.offers
      });

      setCategoryList(response.categories);
    },
    error: function (err) {
      console.log("ERROR", err);
    }
  });
}, []);

   const [offers,dispatchOffer]=useReducer(offerReducer,[]) ;
    const selectedOffer=offers.find(o=>o.selected);
  return (
    <Router>
      
      <Routes>
        
         
        <Route path="home" element={<HomeFood  categoryList={categoryList}/>} />
          <Route path="/home" element={<HomeFood categoryList={categoryList} />} />	
          <Route path="Items" element={<Items itemList={itemList} dispatch={dispatch} categoryList={categoryList}/>} />
          <Route path="Cart" element={<Cart itemList={itemList} charges={charges} selectedOffer={selectedOffer}/>} />
          <Route path="/Offers" element={<Offers  offers={offers}  dispatch={dispatchOffer} charges={charges}/>} />
          <Route path="/Account" element={<MyAccount/>} />
         <Route path="/" element={<Login/>} />
         <Route path="login" element={<Login/>} />
         <Route path='/wishlist' element={<WishList/>} />

      </Routes>
    </Router>
  );
}

export default App;
/*import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import MyForm from './components/MyForm';
import ResumeBuilder from './components/ResumeBuilder';
import Invoice from './components/Invoice';
import DashboardLayout from './components/DashboardLayout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFood from './components/FoodWeb/NavbarFood';

function App() {
  return (
    <Router>
      <Routes>
        
         
        <Route path="/" element={<NavbarFood />} />

         
        <Route path="/dashboard" element={<DashboardLayout />}>

           
          <Route path="home" element={<Home />} />	
          <Route path="MyForm" element={<MyForm />} />
          <Route path="ResumeBuilder" element={<ResumeBuilder />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
*/