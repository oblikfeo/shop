import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../app/Redux/slices/productsSlice'
import { useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import Basket from './basket';
import { useSelector } from 'react-redux';


const Header = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [basket, setBasket] = useState(false)
  const overall = useSelector(state => state.products.items.length)
  const sum = useSelector(state => state.products.items.reduce((acc, val) => acc + Number(val.price), 0))

    return (
      <header>
        <Link href='/' className='shopName'><span>e-commerce</span></Link>
        <input
        className='inputSearch'
        onChange={(e) => {
          setSearch(e.target.value)
          dispatch(searchProducts(e.target.value))
        }}
        value={search}
          type="text"
          placeholder='Поиск товаров по названию'
          />
        <div className='flex'>
          <div className='countItem'>{overall}</div>
            <strong>{sum.toFixed(2)} $</strong>
            <FaBasketShopping onClick={() => setBasket(!basket)} className={`basketIcon ${basket && 'active'}`}/>
        </div>
        {basket && (
          <Basket />
        )}
      </header>
    );
  };
  
  export default Header;
  