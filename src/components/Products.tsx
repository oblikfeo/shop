import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useProducts } from '../app/Redux/axios';
import { addItems } from '@/app/Redux/slices/productsSlice';
import { useDispatch } from 'react-redux';

const Products = () => {

  const dispatch = useDispatch()
  
  const { data, status } = useProducts();
  const products = useSelector((state) => state.products.filteredProducts);

  if (status === 'loading') {
    return <div className='loading'>Loading...</div>;
  }

  if (status === 'error') {
    return <div className='loading'>Error fetching products</div>;
  }

  return (
    <div>
      <div className="main">
        {products.map((item) => (
        <div className="card" key={item.id}>
        <img src={item.images[0]} alt="" />
        <div>
          <div>
            <p>{item.title}</p>
            <span>Цена: </span>
            <b>{item.price} $ / {item.price} Coins</b>
          </div>
          <button onClick={() => dispatch(addItems(item.id))} className="add" id={item.id}>
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