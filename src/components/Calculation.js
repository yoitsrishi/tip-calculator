import React from 'react';

function Calculation({ data, price, dataRecommendation }) {
  const avg = Math.round((Number(data) + Number(dataRecommendation)) / 2);
  const result = avg + Number(price);
  return (
    <div>
      <p>
        You pay ${result} (${price} + ${avg} tip)
      </p>
    </div>
  );
}

export default Calculation;
