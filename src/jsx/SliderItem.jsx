import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({ image, description, link }) => {
  const imageElement = (
    <img
      className="slider-item__image"
      src={image}
      alt={description || "Slide"}
    />
  );

  return (
    <div className="slider-item">
      {link ? <Link to={link}>{imageElement}</Link> : imageElement}
    </div>
  );
};

export default SliderItem;