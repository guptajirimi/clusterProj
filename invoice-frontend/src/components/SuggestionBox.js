import react from "react";

function SuggestionBox(){
    const [suggestions,setsuggestionList]=useState(["para","tab","inj"]);

    return(
        <>
            <div id="topserchbar">
                    <input id="suggestion" name="suggestion" placeholder="" value={suggestions}/>
            </div>
        </>
    )
}