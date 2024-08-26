import { useSelector } from 'react-redux';
import { useProducts } from '../app/Redux/axios';
import { addItems } from '@/app/Redux/slices/productsSlice';
import { useDispatch } from 'react-redux';

const Products = () => {

  const dispatch = useDispatch()
  
  const { data, status } = useProducts();
  const products = useSelector((state: any) => state.products.filteredProducts);

  if (status === 'loading') {
    return <div className='loading'>Loading...</div>;
  }

  if (status === 'error') {
    return <div className='loading'>Error fetching products</div>;
  }

  return (
    <div>
      <div className="main">
        {products.map((item: { id: number; images: any[]; title: string; price: number; }) => (
        <div className="card" key={item.id}>
        <img src={item.images[0]} alt="" />
        <div>
          <div>
            <p>{item.title}</p>
            <span>Цена: </span>
            <b>{item.price} $ / {item.price} Coins</b>
          </div>
          <button onClick={() => dispatch(addItems(item.id))} className="add" id={item.id}>
            Добавить / Удалить
          </button>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Products;