import React from "react";
import { useState } from "react";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("Guadalajara, Jal.");
    const [city, setCity] = useState('');

    return(
    <div>
        <input 
        type="text"
        className="search-input"
        placeholder="Enter location"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
            <p>Current city: {city}</p>
            <button onClick={() => setCity(inputValue)}>
                Search
            </button>
    </div>
    );
};

export default SearchBar;