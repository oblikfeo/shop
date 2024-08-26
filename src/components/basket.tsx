import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItems } from '@/app/Redux/slices/productsSlice';
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import Modal from './Modal';

const Basket = ({setBasket}) => {

  const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState(false)

  const render = useSelector((state: any) => state.products.items)

    return (
      <>
        <div className="basket">
        <span className='basketTitle'>Корзина</span>
        <div className="listBuyItems">
            {render.map((item: { id: number; images: any[]; title: string; price: number; }) => (
              <div className="buyItem" key={item.id}>
                <img className='basketItemImg' src={item.images[0]} alt="" />
                <div className='flexName'>
                  <span className='basketItemTitle'>{item.title.slice(0, 30)}</span>
                  <span className='basketItemPrice'>{item.price} $</span>
                </div>
                <div className='rightBut'>
                <button onClick={() => dispatch(addItems(item.id))} className='delBut'>удалить</button>
                </div>
              </div>
            )
            )}
        </div>
        <button onClick={() => setModalActive(true)} className='payBut'>оплатить</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}  setBasket={setBasket}/>
      </>
            
    );
  };
  
  export default Basket;