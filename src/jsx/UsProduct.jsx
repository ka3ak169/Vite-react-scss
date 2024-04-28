import Product from './Product';
import { products } from '../../public/data/products';

function UsProduct() {
  const renderProducts = () => {
    return products.map((product, index) => (
      <Product key={index} name={product.name} description={product.description} index={index} />
    ));
  };

  return <>{renderProducts()}</>;
}

export default UsProduct;