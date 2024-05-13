import React from 'react';

const SliderItem = ({ image, description }) => {
  return (
    <div className="slider-item">
      <img  className='slider-item__image' src={image} alt="Slide" />
      <p className='slider-item__description'>{description}</p>
    </div>
  );
};

export default SliderItem;