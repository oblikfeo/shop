import React from 'react';
import { useSelector } from 'react-redux';
import { useProducts } from '../app/Redux/axios';

const Products = () => {
  const { data, status } = useProducts();
  const products = useSelector((state) => state.products.data);
  console.log(products)

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching products</div>;
  }

  return (
    <div>
      <div className="main">
        {products.products.map((item) => (
        <div className="card" key={item.id}>
        <img src={item.images[0]} alt="" />
        <div>
          <div>
            <p>{item.title}</p>
            <span>Цена: </span>
            <b>{item.price} $ / {item.price} Coins</b>
          </div>
          <button className="add" id={item.id}>
            Добавить в корзину
          </button>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Products;