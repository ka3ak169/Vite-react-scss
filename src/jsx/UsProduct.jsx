import { useEffect, useState } from 'react';
import Product from './Product';
import { products } from '../../public/data/products';

function UsProduct() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 400px)");

    const handleResize = () => {
      setIsWideScreen(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener("change", handleResize);
    handleResize(); // Вызываем функцию при начальной загрузке компонента

    return () => {
      mediaQueryList.removeEventListener("change", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   console.log(isWideScreen);
  // }, [isWideScreen]);

  // const renderProducts = () => {
  //   if (isWideScreen) {
  //     // Логика отрисовки для широких экранов
  //     return products.map((product, index) => (
  //       <Product key={index} name={product.name} description={product.description} index={index} onisWideScreen={isWideScreen}/>
  //     ));
  //   } else {
  //     // Логика отрисовки для маленьких экранов
  //     return products.map((product, index) => (
  //       <div key={index}>
  //         <h3>{product.name}</h3>
  //       </div>
  //     ));
  //   }
  // };

  const renderProducts = () => {
      // Логика отрисовки для широких экранов
      return products.map((product, index) => (
        <Product key={index} name={product.name} description={product.description} index={index} onisWideScreen={isWideScreen}/>
      ));
  };

  return <>{renderProducts()}</>;
}

export default UsProduct;
