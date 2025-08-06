import React from "react";
import { useState } from "react";

const SearchBar = () => {

    const [city, setCity] = useState('Guadalajara, Jal.');

    const handleInput = (e) => {
        setCity(e.target.value);
    };

    return(
    <div>
        <input 
        type="text"
        className="search-input"
        placeholder="Enter location"
        value={city}
        onChange={() => handleInput(city)}/>
            <p>Current city: {city}</p>
            <button onClick={() => console.log("Searching for:", city)}>
                Search
            </button>
    </div>
    );
};

export default SearchBar;