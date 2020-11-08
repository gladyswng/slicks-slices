import { useContext } from "react";
import { useState } from "react";
import OrderContext from "../components/OrderContext";
import attachNamesAndPrices from "./attachNamesAndPrices";
import calculateOrderTotal from "./calculateOrderTotal";
import formatMoney from "./formatMoney";

export default function usePizza({ pizzas, values }) {
  // 1. create some state to hold our orders
  // removed useState line since we moved useState up to the provider, now we access both our state and updater function (setOrder)
  // const [order, setOrder] = useState([])
  const [ order, setOrder ] = useContext(OrderContext)

  const [error, setError] = useState(false) 
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // 2. make a funtion add things to order
  const addToOrder = (orderedPizza) => {
    setOrder([...order, orderedPizza])
  }
  // 3. make afunction remove things from order
  const removeFromOrder = (index) => {
   
    setOrder([
      // everthing before the item remove
      ...order.slice(0, index),
      // everything after the item we went to remove
      ...order.slice(index + 1)
    ])
  }


  // when submits the form
  const submitOrder = async (e) => {
    e.preventDefault()
   
    setLoading(true)
    setError(null)
    setMessage(null)
    
    // gather all the data that needs to be sent
    const body = {
      order: attachNamesAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
      mapleSyrup: values.mapleSyrup
      
    }


    
      // 4. send this data a serverless function when they check out
      const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        
      })

      const text = JSON.parse(await res.text())

      // check if everything worked
      if(res.status >= 400 && res.status <= 600 ) {
        setLoading(false)
        setError( text.message)
      } else {
        setLoading(false)
        setMessage('Success! Come on down for your pizza')
      }

  }



  return {
    order, 
    addToOrder,
    removeFromOrder,
    submitOrder,
    error,
    loading,
    message,

  }
}
