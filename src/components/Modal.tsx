import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { addItems, clearBasket, dollar } from "@/app/Redux/slices/productsSlice";
import { useDispatch } from 'react-redux';
import { pay } from "@/app/Redux/slices/productsSlice";
import { useState } from 'react';

const Modal = ( {active, setActive, setBasket} ) => {
    
    const sum = useSelector((state: any) => state.products.items.reduce((acc, val) => acc + Number(val.price), 0))
    const balanceDolar = useSelector((state: any) => state.products.balanceDollar)
    const balanceCoins = useSelector((state: any) => state.products.balanceCoins)
    let basket = useSelector((state: any) => state.products.item)
    const [paymentMethod, setPaymentMethod] = useState("dollar")
    const dispatch = useDispatch()

      return (
          <div onClick={() => setActive(false)} className={active ? "modal active1" : "modal"}>
            <div onClick={e => e.stopPropagation()} className="content">
                <span className="balance">Баланс: {balanceDolar.toFixed(2)} $ / {balanceCoins.toFixed(2)} Coins</span>
                <span className="howPay">Способ оплаты</span>
                <select
                onChange={(e) => setPaymentMethod(e.target.value)} 
                value={paymentMethod} 
                className="select" 
                name="select" id="">
                    <option className="option" value="coins">купить за Coins</option>
                    <option className="option" value="dollar">купить за $</option>
                </select>
                <div className="centerTitle">
                    <span className="change">Обмен валюты</span>
                    <div>
                        <button onClick={() => dispatch(dollar("minus"))}  className="btn">99$ (coins)</button>
                        <SlBasket className="imgBuy"/>
                        <button onClick={() => dispatch(dollar("plus"))} className="btn">99 coins ($)</button>
                    </div>
                </div>
                <span className="sumOrder">Общая Цена: {sum.toFixed(2)} $</span>
                <button onClick={() => {
                    dispatch(pay(paymentMethod))
                    setActive(false)
                    setBasket(false)
                    dispatch(clearBasket(basket))
                    }} className="finish">Оплатить</button>
            </div>
          </div>
      );
    };
    
    export default Modal;