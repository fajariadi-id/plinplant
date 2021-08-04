import React, { useContext, useEffect } from 'react';

import Navbar from '../components/Navbar';
import HeaderEncyclopedia from '../components/HeaderEncyclopedia';
import PlantBreeding from '../components/PlantBreeding';
import CTAEncyclopedia from '../components/CTAEncyclopedia';
import RelatedPlants from '../components/RelatedPlants';

import { Context } from '../context/store';
import { getPlant } from '../context/actions';

const EncyclopediaPage = ({ match }) => {
  const { plantState, plantsState, plantDispatch } = useContext(Context);

  useEffect(() => {
    plantDispatch(getPlant(match.params.id));
    window.scrollTo({ top: 0 });
  }, [match.params.id, plantDispatch]);

  return (
    <>
      <Navbar />
      <HeaderEncyclopedia />
      <PlantBreeding />
      <CTAEncyclopedia
        id={plantState.pk_plant_id}
        name={plantState.plant_name}
      />
      <RelatedPlants category={plantState.category_name} plants={plantsState} />
    </>
  );
};

export default EncyclopediaPage;
