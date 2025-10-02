import React, { useState } from "react";
import "./all.css"; // CSS for styling

export default function OrderPage() {
  const categories = ["Pizzas", "Garlic Bread", "Burgers", "Drinks"];
  const [activeCategory, setActiveCategory] = useState("Pizzas");

  const products = [
    { id: 1, name: "Margherita", price: 10, category: "Pizzas" },
    { id: 2, name: "Pepperoni", price: 12, category: "Pizzas" },
    { id: 3, name: "Cheesy Garlic Bread", price: 5, category: "Garlic Bread" },
    { id: 4, name: "Classic Burger", price: 8, category: "Burgers" },
    { id: 5, name: "Cola", price: 3, category: "Drinks" },
  ];

  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const total = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Product List */}
      <main className="products">
        <h2>{activeCategory}</h2>
        <div className="product-grid">
          {products
            .filter((p) => p.category === activeCategory)
            .map((p) => (
              <div key={p.id} className="product-card">
                <h3>{p.name}</h3>
                <p>${p.price}</p>
                <button onClick={() => addToBasket(p)}>Add to Basket</button>
              </div>
            ))}
        </div>
      </main>

      {/* Basket */}
      <aside className="basket">
        <h2>Basket</h2>
        {basket.length === 0 ? (
          <p>No items yet</p>
        ) : (
          <ul>
            {basket.map((item, i) => (
              <li key={i}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${total}</h3>
      </aside>
    </div>
  );
}
