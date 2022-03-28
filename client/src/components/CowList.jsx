import React from 'react';

const SelectedCow = ({cows, handleClick}) => (
  <div>
    <h3>Name</h3>
        {cows.map(cow => {
          return (
            <div key={cow.id} onClick={() => handleClick(cow)}>
              {cow.name}
            </div>
          )
        })}
  </div>
);

export default SelectedCow;