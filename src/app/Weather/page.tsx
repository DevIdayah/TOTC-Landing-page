"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image"; 

const Weather = () => {
  
   
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
  
    
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; 
    const CITY = "Ilorin";
  
  
    const getWeatherIcon = (description) => {
      if (description.includes("Clear")) return sunny; 
      if (description.includes("Rain")) return raining; 
      if (description.includes("Snow")) return snow; 
      if (description.includes("Clouds")) return cloud; 
      return sunny; 
    };
  
    useEffect(() => {
     
      const fetchWeather = async () => {
        try {
   
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
          );
       
          setWeatherData(response.data);
          console.log(response.data);
        } catch (err) {
         
          setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
        
          setLoading(false);
        }
      };
  
      fetchWeather();
    }, [API_KEY]); 

  
    if (loading) return <p>Loading...</p>; 
    if (error) return <p>Error: {error}</p>; 
    
 
    const icon = getWeatherIcon(weatherData?.weather[0].main); 
  
    return (
      <div className="text-3xl">
        <div className="flex items-center">
          <Image src={icon} width={100} height={100} alt="Weather icon" />
          <h2>Weather in {weatherData?.name}</h2>
        </div>
        <p>Temperature: {weatherData?.main.temp} °C</p>
        <p>Condition: {weatherData?.weather[0].main}</p>
        <p>Humidity: {weatherData?.main.humidity}%</p>

      </div>
    );
  };
  
  export default Weather; 
  