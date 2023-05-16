import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ResidentInfo.css';


const ResidentInfo = ({ residentUrl }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await axios.get(residentUrl);
        setResident(response.data);
      } catch (error) {
        console.error('Error occurred while fetching resident data.', error);
      }
    };

    fetchResident();
  }, [residentUrl]);

  if (!resident) {
    return null; // Mostrar un mensaje de carga o un componente de carga mientras se obtiene la información del residente.
  }

  const getStatus = () => {
    if (resident.status === 'Alive') {
      return 'Vivo';
    } else if (resident.status === 'Dead') {
      return 'Muerto';
    } else {
      return 'Desconocido';
    }
  };

  return (
    <div className="resident-info">
      <h3>{resident.name}</h3>
      <img className="resident-image" src={resident.image} alt={resident.name} />
      <p><strong>Status:</strong> {getStatus()}</p>
      <p><strong>Lugar de origen:</strong> {resident.origin.name}</p>
      <p><strong>Cantidad de episodios:</strong> {resident.episode.length}</p>
    </div>
  );
};

export default ResidentInfo;

