import { sortProducts } from '@/app/Redux/slices/productsSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



const Filter = () => {

    const dispatch = useDispatch()

    return (
        <div className="filter">
            <button onClick={() => dispatch(sortProducts("max"))} className="filterBut">цена по возрастанию</button>
            <button onClick={() => dispatch(sortProducts("min"))} className="filterBut">цена по убыванию</button>
        </div>
    );
  };
  
  export default Filter;