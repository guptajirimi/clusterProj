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
import { useReducer, useState } from 'react';
import Offers from './components/FoodWeb/Offers';
 import itemListReducer from './reducers/itemListReducer';
import useCart from './customHooks/useCart';
import offerReducer from './reducers/offerReducer';
 
function App() {
  const initialItemList=([
  { id: 1, name: "Rice", cost: 10, qty: 0 },
  { id: 2, name: "Roti", cost: 3, qty: 0 },
  { id: 3, name: "Dal", cost: 25, qty: 0 },
  { id: 4, name: "Sabji", cost: 11, qty: 0 }
 
]);
  const [itemList, dispatch] = useReducer(itemListReducer,initialItemList);
  const {subTotal}=useCart(itemList);
  const charges=({subTotal:subTotal,deliveryCharges:13,govCharges:15});

  const initialOffers=([
    {id:1,elegiLityCreteria:159,Discount:50,selected: false},
    {id:2,elegiLityCreteria:299,Discount:100,selected: false},
    {id:3,elegiLityCreteria:399,Discount:150,selected: false},
    {id:4,elegiLityCreteria:599,Discount:180,selected: false}
  ])


   const [offers,dispatchOffer]=useReducer(offerReducer,initialOffers) ;
    const selectedOffer=offers.find(o=>o.selected);
  return (
    <Router>
      
      <Routes>
        
         
        <Route path="home" element={<HomeFood />} />
          <Route path="/" element={<HomeFood />} />	
          <Route path="Items" element={<Items itemList={itemList} dispatch={dispatch}/>} />
          <Route path="Cart" element={<Cart itemList={itemList} charges={charges} selectedOffer={selectedOffer}/>} />
          <Route path="/Offers" element={<Offers  offers={offers}  dispatch={dispatchOffer} charges={charges}/>} />
         <Route path="login" element={<Login/>} />

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