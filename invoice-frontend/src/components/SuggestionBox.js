import React from "react";

function SuggestionBox() {

  const suggestions = ["para", "tab", "inj"];

  return (
    <>
      <div id="topserchbar">
        {suggestions.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default SuggestionBox;
