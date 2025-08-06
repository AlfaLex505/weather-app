import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState("");

  const handleCitySearch = (cityName) => {
    console.log("Searching for city:", cityName);
    setCity(cityName);
    // pending for fetching weather data
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleCitySearch}/>
      <p>Selected City: {city}</p>
    </div>
    
  );
}

export default App;
