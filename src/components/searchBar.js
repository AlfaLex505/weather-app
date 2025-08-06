import React from "react";
import { useState } from "react";

const SearchBar = () => {

    const [city, setCity] = useState('Guadalajara, Jal.');

    const handleClick = (newCity) => {
        setCity(newCity);
    };

    return(
        <input 
        type="text"
        className="search-input"
        placeholder="Enter location"
        value={newCity}
        onChange={handleClick(newCity)}>
            <p>
                Current city: {city}
            </p>
            <button onClick={() => handleClick()}>
                Search
            </button>
        </input>
    );
}

export default SearchBar;