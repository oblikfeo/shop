"use client";

import Filter from "@/components/filter";
import Header from "@/components/Header";
import { store } from "@/app/Redux/Store"
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Products from "@/components/Products";


const queryClient = new QueryClient();

export default function MyPage() {



  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <div>
        <Header/>
        <Filter/>
        <Products/>
      </div>
    </QueryClientProvider>
    </Provider>
    
    
  );
};
