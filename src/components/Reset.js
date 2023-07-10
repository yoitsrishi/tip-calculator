import React from 'react';

function Reset({ setPrice, serviceSetData, recommendationSetData }) {
  const clickHandler = () => {
    setPrice('');
    serviceSetData('');
    recommendationSetData('');
  };
  return (
    <div>
      <button onClick={clickHandler}>Reset</button>
    </div>
  );
}

export default Reset;
