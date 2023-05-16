import { useState } from 'react';
import axios from 'axios';
import Location from '../src/components/location';
import './App.css'; // Importamos el archivo CSS
import ResidentInfo from './components/ResidentInfo';
const App = () => {
  const [locationId, setLocationId] = useState('');
  const [location, setLocation] = useState(null);

  const handleInputChange = (event) => {
    setLocationId(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
      setLocation(response.data);
    } catch (error) {
      console.error('Error occurred while fetching location data.', error);
    }
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input type="text" value={locationId} onChange={handleInputChange} placeholder="Enter location ID" />
        <button onClick={handleButtonClick}>Get Location</button>
      </div>
      {location && (
        <div className="location-container">
          <Location
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
          <h2>Residents:</h2>
          <div className="residents-container">
            {location.residents.map((residentUrl, index) => (
              <ResidentInfo key={index} residentUrl={residentUrl} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;



