import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../app/Redux/slices/productsSlice'
import { useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";


const Header = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [basket, setBasket] = useState(false)

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
          <div className='countItem'>0</div>
            <strong>0 $</strong>
            <FaBasketShopping onClick={() => setBasket(!basket)} className={`basket ${basket && 'active'}`}/>
        </div>
      </header>
    );
  };
  
  export default Header;
  