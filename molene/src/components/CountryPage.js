import React from "react";
import Introduction from './Introduction'
import ImageWithText from './ImageWithText'
export const CountryPage = () => {
  return (
    <div className='country-page'>
      <Introduction/>
      <ImageWithText />
    </div>
  );
};

export default CountryPage;
