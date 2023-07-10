import React from 'react';

function Service({
  action,
  serviceData,
  serviceSetData,
  recommendationData,
  recommendationSetData,
}) {
  const changeServiceHandler = (e) => {
    serviceSetData(e.target.value);
  };
  const changeRecommendationHandler = (e) => {
    recommendationSetData(e.target.value);
  };
  return (
    <div>
      {action === 'service' && (
        <div>
          <label htmlFor="service">How much did you like the service?</label>
          <select name="service" id="service" onChange={changeServiceHandler}>
            <option value="none" selected>
              Rate our service
            </option>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing (20%)</option>
          </select>
        </div>
      )}
      {action === 'recommendation' && (
        <div>
          <label htmlFor="service">How did your friend like the service?</label>
          <select
            name="service"
            id="service"
            onChange={changeRecommendationHandler}
          >
            <option value="none" selected>
              Rate our service
            </option>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing (20%)</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Service;
