import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
import plants from '../../mock/plants';
import PlantDetail from './../PlantDetail/index';

const PlantDetailContainer = () => {
  const [plant, setPlant] = useState({});

  const { id } = useParams();

  useEffect(() => {
    customFetch(plants, 100, parseInt(id)).then((res) => setPlant(res));
  }, [id]);

  return (
    <>
      <section className='text-gray-700 body-font overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          <PlantDetail plant={plant} />
        </div>
      </section>
    </>
  );
};

export default PlantDetailContainer;
