import BillEntry from './components/BillEntry';
import Service from './components/Service';
import Calculation from './components/Calculation';
import Reset from './components/Reset';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [price, setPrice] = useState('');
  const [dataRecommendation, setDataRecommendation] = useState('');
  return (
    <>
      <BillEntry price={price} setPrice={setPrice} />
      <Service action="service" serviceData={data} serviceSetData={setData} />
      <Service
        action="recommendation"
        recommendationData={dataRecommendation}
        recommendationSetData={setDataRecommendation}
      />
      {price > 0 && (
        <>
          <Calculation
            data={data}
            price={price}
            dataRecommendation={dataRecommendation}
          />

          <Reset
            setPrice={setPrice}
            serviceSetData={setData}
            recommendationSetData={setDataRecommendation}
          />
        </>
      )}
    </>
  );
}

export default App;
