 import ItemCards from "./itemCards";  
import NavbarFood from "./NavbarFood";
import "../../css/Items.css";
import { useLocation } from "react-router-dom";
import useCart from "../../customHooks/useCart";
import { useState } from "react";
  

function Items({itemList,dispatch,categoryList}) {

  const location=useLocation();
  const query=new URLSearchParams(location.search);
  const searchTerm=query.get("search") || "";
  const query1=new URLSearchParams(location.category);
  const categoryNav=query.get("id") || ""; 
  const categoryNavNames=query.get("category") || ""; 
  const params = new URLSearchParams(location.search);
const itemId = params.get("itemId");
  let updatedItemList=itemList;
  const [costFilter, setCostFilter] = useState(0);
const [ratingFilter, setRatingFilter] = useState(0);
const [distanceFilter, setDistanceFilter] = useState(0);

 if(categoryNavNames)
 {
  
      updatedItemList = itemList.filter(item =>
        item.category==categoryNavNames
);
 }
 if(itemId)
{
  updatedItemList = itemList.filter(item =>
    item.id == itemId
  );
}
  
      const filteredItems = updatedItemList.filter(item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  
 
 
  const updateQtyCounter = (id, actionType) => {
    dispatch({
      type:actionType,
      id:id
    });
   
};
const onChangeWishlist = (id, actionType) => {
  dispatch({
    type: actionType,
    id: id
  });
};
    const {totalCartValue} =useCart(itemList);
    let filtersSetted = [...filteredItems];
filtersSetted.sort((a, b) => {
	if (costFilter === 1 && a.cost !== b.cost) {
		return a.cost - b.cost;
	}
	  if (costFilter === 2 && a.cost !== b.cost) {
		return b.cost - a.cost;
	}
	  if (ratingFilter === 1 && a.rating !== b.rating) {
		return a.rating - b.rating;
	}
	  if (ratingFilter === 2 && a.rating !== b.rating) {
		return b.rating - a.rating;
	}
	  if (distanceFilter === 1 && a.distance !== b.distance) {
		return a.distance - b.distance;
	}
	  if (distanceFilter === 2 && a.distance !== b.distance) {
		return b.distance - a.distance;
	}
	return 0;
});

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
<div className="filterOnItemList">
	<label>Sort:</label><div className="filtersCostRatingDistance">
		<select id="cost" name="cost" onChange ={(e) => setCostFilter(Number(e.target.value))}>
			<option value={0}>Cost</option>
			<option value={1}>low-high</option>
			<option value={2}>high-low</option>
		</select>
		<select id="rating" name="rating" onChange ={(e) => setRatingFilter(Number(e.target.value))}>
			<option value={0}>Rating</option>
			<option value={1}>low-high</option>
			<option value={2}>high-low</option>
		</select>
		<select id="distance" name="distance" onChange ={(e) => setDistanceFilter(Number(e.target.value))}>
			<option value={0}>Distance</option>
			<option value={1}>Near-Far</option>
			<option value={2}>Far-Near</option>
		</select>
	</div>
</div>


     <div className="items-container">
  {filtersSetted.map(item => (
    <ItemCards
      key={item.id}
      id={item.id}
      name={item.name}
      cost={item.cost}
      qty={item.qty}
      onChange={updateQtyCounter}
       image={item.image}
       onWishlist={onChangeWishlist}
    />
  ))}
</div>

    </>
  );
}

export default Items;
