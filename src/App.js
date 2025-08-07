import './App.css';
import SearchBar from './components/searchBar';
import WeatherDisplay from './components/weatherDisplay'
import { useState } from 'react';

// const API_KEY = '9ae1248b740e5b0137ff1c27beb963fb';
const API_KEY = '9c5990ec93bd5380f4b02abfd5134c9d';

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
        console.log(data);

        if (data.cod === "404") {
          console.log("City not found");
          return;
        }
        if (data.cod === 401) {
          console.log("Invalid API ket");
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
      <WeatherDisplay 
        temperature={temperature}
        condition={condition}
        icon={icon}
        />
      <p>Selected City: {city}</p>
    </div>
    
  );
}

export default App;
