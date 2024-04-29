function Product({ pic, description, index, onisWideScreen }) {
  // console.log(onisWideScreen);
  console.log(pic);
  if (!onisWideScreen) {
    return (
      <div className='product'>
        <img className='product__pic' src={pic} alt='product'></img>
        <p className='product__description'>{description}</p>
      </div>
    );
  } else {
    if (index % 2 === 0) {
      return (
        <div className='product'>
          <img className='product__pic' src={pic} alt='product'></img>
          <p className='product__description'>{description}</p>
        </div>
      );
    } else {
      return (
        <div className='product'>
          <p className='product__description'>{description}</p>
          <img className='product__pic' src={pic} alt='product'></img>
        </div>
      );
    }
  }

}

export default Product;