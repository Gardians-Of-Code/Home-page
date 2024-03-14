import "./Greeting.css";
import React, { useState, useEffect } from "react";
// import "./styles.css"; // Import CSS file

type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;    
  };
};                        

function Greeting() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const apiKey = "e47127c68406988457d9efb4d096acd3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Roorkee&appid=${apiKey}`; // Adjust city name as needed

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));

    return () => clearInterval(timerId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
    // year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const weatherIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const temperature = Math.floor(weatherData.main.temp - 273.15) + "°C"; // Convert Kelvin to Celsius

  return (
    <div className="time-date-weather">
      <div className="time-date">
        <span className="time">{formattedTime}</span>
        <br />
        <span className="date">{formattedDate}</span>
      </div>
      <div className="weather">
        <img src={weatherIcon} alt="Weather icon" />
        <span className="temp">{temperature}</span>
      </div>
    </div>
  );
}

// export default TimeDateWeather;

// function Greeting() {
//   return (
//     <div className="Greetings">
//       <div id="time">{/* {time} */}</div>
//     </div>
//   );
// }

export default Greeting;
