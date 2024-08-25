import Link from 'next/link';
import img from '../img/img.png'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../app/Redux/slices/productsSlice'
import { useState } from 'react';

const Header = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

    return (
      <header>
        <Link href='/'><span>e-commerce</span></Link>
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
            <strong>0 $</strong>
            <Link href='/Basket'><Image className='img' src={img} alt="" /></Link>
        </div>
      </header>
    );
  };
  
  export default Header;
  