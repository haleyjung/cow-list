import React from 'react';

const SelectedCow = ({selectedCow}) => (
  <div>
    <h2>Selected Cow</h2>
    <p>Name: {selectedCow.name}</p>
    <p>Description: {selectedCow.description}</p>
  </div>
);

export default SelectedCow;