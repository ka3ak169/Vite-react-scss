function Product({ name, description, index, onisWideScreen }) {
  console.log(onisWideScreen);
  if (!onisWideScreen) {
    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  } else {
    if (index % 2 === 0) {
      return (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{description}</p>
          <h3>{name}</h3>
        </div>
      );
    }
  }

}

export default Product;