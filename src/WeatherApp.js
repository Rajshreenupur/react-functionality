import React, { useState } from 'react';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fc5c118768af4e92bf6102401241904&q=${location}&aqi=yes `);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Enter location" 
        />
        <button type="submit" onClick={handleSubmit}>Get Weather</button>
        {weatherData && (
      <div>
        <h2>Weather in {weatherData.location.name}</h2>
        <p>Temperature: {weatherData.current && weatherData.current.temp_c} °C</p>
        <p>Time: {weatherData.location && weatherData.location.localtime}</p>
      </div>
    )}
    </div>
  );
};

export default WeatherApp;

//with use effect-----
// Using useEffect in this scenario ensures that the weather data is fetched under certain conditions without relying on user interaction. Here's why we use useEffect in this Weather App:

// Initial Data Fetching:
// We want to fetch weather data when the component first mounts. Without useEffect, the data fetching logic would need to be triggered explicitly, such as in the handleSubmit function. By using useEffect, the data fetching occurs automatically when the component mounts, leading to a smoother user experience without requiring any user interaction.
// Dependency Tracking:
// By specifying location as a dependency in the useEffect dependency array ([location]), we ensure that the effect is re-executed whenever the location state changes. This means that if the user enters a new location in the input field, the weather data for that new location will be fetched automatically without the need for additional user actions.
// Separation of Concerns:
// Using useEffect separates the data fetching logic from the rest of the component's rendering logic. This helps to keep the component clean and organized, making it easier to understand and maintain.
// Avoiding Duplicate Fetches:
// useEffect ensures that we don't accidentally trigger duplicate fetches of weather data. If we were to fetch data directly in the handleSubmit function without useEffect, we might end up fetching data multiple times if the user submits the form multiple times rapidly.
// Overall, using useEffect for data fetching in this Weather App enhances its usability, maintainability, and ensures a more seamless user experience by automatically fetching data based on certain conditions without relying solely on user interactions.








// import React, { useState, useEffect } from 'react';

// const WeatherApp = () => {
//   const [location, setLocation] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (location) {
//       fetchWeatherData();
//     }
//   }, [location]);

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fc5c118768af4e92bf6102401241904&q=${location}&aqi=yes`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch weather data');
//       }
//       const data = await response.json();
//       setWeatherData(data);
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//       setError('Failed to fetch weather data. Please try again.'); // Set error message
//       setWeatherData(null); // Clear weather data on error
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (location.trim() !== '') {
//       fetchWeatherData();
//     } else {
//       setError('Please enter a location');
//     }
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={location} 
//           onChange={(e) => setLocation(e.target.value)} 
//           placeholder="Enter location" 
//         />
//         <button type="submit">Get Weather</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {weatherData && (
//         <div>
//           <h2>Weather in {weatherData.location.name}</h2>
//           <p>Temperature: {weatherData.current && weatherData.current.temp_c} °C</p>
//           <p>Time: {weatherData.location && weatherData.location.localtime}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
