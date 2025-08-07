import './App.css';
import SearchBar from './components/searchBar';
import WeatherDisplay from './components/weatherDisplay'
import { useState } from 'react';

const API_KEY = '9ae1248b740e5b0137ff1c27beb963fb';

function App() {
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = (cityName) => {
    if (!cityName) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          alert("City not found");
          return;
        }
        setTemperature(data.main.temp);
        setCondition(data.weather[0].description);
        setIcon(data.weather[0].icon);
        setCity(data.name);
      })
      .catch((err) => console.error("Error fetching weather:", err));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch}/>
      <WeatherDisplay />
      <p>Selected City: {city}</p>
    </div>
    
  );
}

export default App;
