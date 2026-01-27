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
import { useState } from 'react';
import Offers from './components/FoodWeb/Offers';
function App() {
  const [itemList, setItemList] = useState([
  { id: 1, name: "Rice", cost: 10, qty: 0 },
  { id: 2, name: "Roti", cost: 3, qty: 0 },
  { id: 3, name: "Dal", cost: 25, qty: 0 },
  { id: 4, name: "Sabji", cost: 11, qty: 0 },

  // Snacks
  { id: 5, name: "Samosa", cost: 15, qty: 0 },
  { id: 6, name: "Pakora", cost: 20, qty: 0 },
  { id: 7, name: "Vada Pav", cost: 25, qty: 0 },

  // Main Course
  { id: 8, name: "Paneer Butter Masala", cost: 80, qty: 0 },
  { id: 9, name: "Chole Bhature", cost: 60, qty: 0 },
  { id: 10, name: "Veg Biryani", cost: 90, qty: 0 },

  // Fast Food
  { id: 11, name: "Veg Burger", cost: 50, qty: 0 },
  { id: 12, name: "Veg Pizza", cost: 120, qty: 0 },
  { id: 13, name: "French Fries", cost: 40, qty: 0 },

  // Beverages
  { id: 14, name: "Tea", cost: 10, qty: 0 },
  { id: 15, name: "Coffee", cost: 15, qty: 0 },
  { id: 16, name: "Cold Drink", cost: 25, qty: 0 },

  // Desserts
  { id: 17, name: "Gulab Jamun", cost: 30, qty: 0 },
  { id: 18, name: "Ice Cream", cost: 35, qty: 0 },
]);

   const [offers,setOffers]=useState([
    {id:1,elegiLityCreteria:159,Discount:50},
    {id:2,elegiLityCreteria:299,Discount:100},
    {id:3,elegiLityCreteria:399,Discount:150},
    {id:4,elegiLityCreteria:599,Discount:180}
   ]) 
    
  return (
    <Router>
      
      <Routes>
        
         
        <Route path="home" element={<HomeFood />} />
          <Route path="/" element={<HomeFood />} />	
          <Route path="Items" element={<Items itemList={itemList} setItemList={setItemList}/>} />
          <Route path="Cart" element={<Cart itemList={itemList} />} />
          <Route path="/Offers" element={<Offers  offers={offers} setOffers={setOffers}/>} />
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