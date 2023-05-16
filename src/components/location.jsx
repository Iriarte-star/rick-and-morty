import React from 'react';
import "../styles/location.css"

const Location = ({ name, type, dimension, residents }) => {
  return (
    <div>
      <h2>Location Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Dimension:</strong> {dimension}</p>
      <p><strong>Number of Residents:</strong> {residents.length}</p>
    </div>
  );
};

export default Location;

