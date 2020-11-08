import calculatePizzaPrice from "./calculatePizzaPrice"

export default function calculateOrderTotal (order, pizzas) {
  // loop over each item in the order
  const total = order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(singPizza => singPizza.id === singleOrder.id)
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size)
  }, 0)

  return total
  // calc the total for that pizza
  // add that total to the running total
}