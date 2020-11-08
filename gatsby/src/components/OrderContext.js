import { useStaticQuery } from 'gatsby';
import React, { useState, createContext } from 'react';


const OrderContext = createContext()


export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([])
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  )
} 

export default OrderContext