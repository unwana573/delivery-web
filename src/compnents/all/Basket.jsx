import React from "react";

function Basket() {
  const items = [
    { name: "Vegetarian Pizza", price: "£27.90", qty: 1 },
    { name: "Tandoori Pizza", price: "£17.90", qty: 1 },
    { name: "Coke Cola", price: "£4.80", qty: 1 }
  ];

  const subtotal = 127.9;
  const discount = 3.0;
  const delivery = 2.5;

  return (
    <aside className="basket">
      <h3>My Basket</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.qty}x {item.name} <span>{item.price}</span>
          </li>
        ))}
      </ul>

      <div className="totals">
        <p>Subtotal: £{subtotal}</p>
        <p>Discounts: -£{discount}</p>
        <p>Delivery Fee: £{delivery}</p>
      </div>

      <div className="checkout">
        <h4>Total to pay: £{(subtotal - discount + delivery).toFixed(2)}</h4>
        <button>Checkout!</button>
      </div>
    </aside>
  );
}

export default Basket;
