function Product({ name, description, index }) {
  console.log(index);

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Product;