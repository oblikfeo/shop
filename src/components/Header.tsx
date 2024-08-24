import Link from 'next/link';
import img from '../img/img.png'
import Image from 'next/image';

const Header = () => {

    return (
      <header>
        <Link href='/'><span>e-commerce</span></Link>
        <input
        className='inputSearch'
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
  