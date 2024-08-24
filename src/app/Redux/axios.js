import { useQuery } from 'react-query';
import axiosInstance from '../axios';
import { useDispatch } from 'react-redux';
import { setProducts } from './productsSlice';

const fetchProducts = async () => {
  const { data } = await axiosInstance.get('https://dummyjson.com/products');
  return data;
};

export const useProducts = () => {
  const dispatch = useDispatch();

  return useQuery('products', fetchProducts, {
    onSuccess: (data) => {
      dispatch(setProducts(data));
    },
  });
};