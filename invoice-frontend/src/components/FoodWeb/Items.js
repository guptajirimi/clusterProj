 import ItemCards from "./itemCards";  
import NavbarFood from "./NavbarFood";
import "../../css/Items.css";
import { useLocation } from "react-router-dom";
import useCart from "../../customHooks/useCart";
  

function Items({itemList,dispatch,categoryList}) {

  const location=useLocation();
  const query=new URLSearchParams(location.search);
  const searchTerm=query.get("search") || "";
  const query1=new URLSearchParams(location.category);
  const categoryNav=query.get("id") || ""; 
 console.log(categoryNav);
 
 const filteredItems = itemList.filter(item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
 
  const updateQtyCounter = (id, actionType) => {
    dispatch({
      type:actionType,
      id:id
    });
   
};
    const {totalCartValue} =useCart(itemList);
  return (
    <>
      <NavbarFood count={totalCartValue} />
    <div className="category-wrapper">
  {categoryList.map((item) => (
    <div
      key={item.id}
      className={`imageItemCategory ${
        item.id === Number(categoryNav) ? "selectedCategory" : ""
      }`}
    >
      <span className="imageCircular"></span>
      <span className="itemCategoryName">
        {item.categoryName}
      </span>
    </div>
  ))}
</div>


     <div className="items-container">
  {filteredItems.map(item => (
    <ItemCards
      key={item.id}
      id={item.id}
      name={item.name}
      cost={item.cost}
      qty={item.qty}
      onChange={updateQtyCounter}
       
    />
  ))}
</div>

    </>
  );
}

export default Items;
