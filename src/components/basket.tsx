import { useSelector } from 'react-redux';

const Basket = () => {

  const render = useSelector(state => state.products.items)
  console.log(render)

    return (
      <div className="basket">
        <span className='basketTitle'>Корзина</span>
        <div className="listBuyItems">
            {render.map(item => (
              <div className="buyItem">
                <img className='basketItemImg' src={item.images[0]} alt="" />
                <div className='flexName'>
                  <span className='basketItemTitle'>{item.title}</span>
                  <span className='basketItemPrice'>{item.price} $</span>
                </div>
                <div className='rightBut'>
                <button className='delBut'>удалить</button>
                </div>
              </div>
            )
              
            )}
        </div>
        <button className='payBut'>оплатить</button>
      </div>
    );
  };
  
  export default Basket;