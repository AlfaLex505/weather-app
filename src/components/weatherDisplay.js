import React, { useState } from "react";

const WeatherDisplay = () => {
    const [temperature, setTemperature] = useState('39 °C');
    const [condition, setCondition] = useState('Sunny');


    return(
        <div className="weather-display">
            <p>Temperature is {temperature}</p>
            <p>{condition}</p>
        </div>
    );
};

export default WeatherDisplay;