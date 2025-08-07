import React from "react";

const WeatherDisplay = ({ temperature, condition, icon }) => {
    return(
        <div className="weather-display">
            <p>Temperature is {temperature}</p>
            <p>Condition: {condition}</p>
            {icon && (
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={condition}
                />
            )}
        </div>
    );
};

export default WeatherDisplay;