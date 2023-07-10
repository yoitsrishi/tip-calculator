import React, { useState } from 'react';

function BillEntry({ setPrice, price }) {
  const changeHandler = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div>
      <label htmlFor="inputPrice">How much was the bill?</label>
      <input
        type="text"
        id="inputPrice"
        name="price"
        value={price}
        onChange={changeHandler}
      />
    </div>
  );
}

export default BillEntry;
