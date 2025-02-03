import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ product }) => {
  const { productId } = useParams();
  const productData = product[productId];

  if (!productData) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-page">
      <h1 className="product-page__title">{productData.title}</h1>
      <div className="product-page__content">
        <img
          className="product-page__image"
          src={productData.image}
          alt={productData.title}
        />
        <div className="product-page__info">
          <ul className="product-page__details">
            <li>Category: {productData.category}</li>
            <li>ABV: {productData.abv}</li>
            <li>Sugar: {productData.sugar}</li>
          </ul>
          <p className="product-page__description">{productData.description}</p>
          <p className="product-page__usage">{productData.usage}</p>
          <div className="product-page__cocktail">
            <h2 className="product-page__cocktail-title">
              Cocktail: {productData.cocktail.name}
            </h2>
            <ul className="product-page__cocktail-ingredients">
              {productData.cocktail.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}: {ingredient.amount}
                </li>
              ))}
            </ul>
            <p className="product-page__cocktail-instructions">
              {productData.cocktail.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
