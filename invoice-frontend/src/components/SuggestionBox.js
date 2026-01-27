import React, { useState, useEffect } from "react";
import $ from "jquery";

function SuggestionBox() {

  const [suggestions, setSuggestion] = useState([]);
  const [userInputItem, setUserInputItem] = useState("");

  useEffect(() => {
    $.ajax({
      url: "http://localhost:90/invoice/getItemList",
      type: "GET",
      success: function (response) {
        setSuggestion(response); // store full object
      },
      error: function () {
        alert("Error Fetching ItemList");
      }
    });
  }, []);

  const handelOnChange = (e) => {
    setUserInputItem(e.target.value);
  };

  const filteredSuggestions = suggestions.filter(item =>
    item.itemName
      .toLowerCase()
      .includes(userInputItem.toLowerCase())
  );

  return (
    <><label htmlFor="">Item Name:</label>
      <input
        name="itemNameSelected" style={{width:"40"}}
        value={userInputItem}
        onChange={handelOnChange}
      />

      {userInputItem && filteredSuggestions.length > 0 && (
        <div id="topserchbar">
          {filteredSuggestions.map(item => (
            <div key={item.itemValue}>
              {item.itemName}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SuggestionBox;
