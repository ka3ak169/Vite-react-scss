import React from 'react';

const SliderItem2 = ({ image, description }) => {
  return (
    <div className="slider-item2">
      {/* <img  className='slider-item2__image' src={image} alt="Slide" /> */}
      <p className='slider-item2__description'>{description}</p>
    </div>
  );
};

export default SliderItem2;