import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("Guadalajara, Jal.");
    
    const handleClick = () => {
        if (onSearch) {
            onSearch(inputValue);
        }
    };

    return(
    <div>
        <input 
        type="text"
        className="search-input"
        placeholder="Enter location"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleClick()}>Search</button>
    </div>
    );
};

export default SearchBar;