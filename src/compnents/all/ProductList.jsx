import React from "react";

const products = [
  {
    name: "Farm House Xtreme Pizza",
    desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger...",
    img: "https://via.placeholder.com/80",
    prices: { Small: "£23.90", Medium: "£25.90", Large: "£27.90", XL: "£29.90" }
  },
  {
    name: "Deluxe Pizza",
    desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger...",
    img: "https://via.placeholder.com/80",
    prices: { Small: "£23.90", Medium: "£25.90", Large: "£27.90", XL: "£29.90" }
  },
  {
    name: "Tandoori Pizza",
    desc: "1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger...",
    img: "https://via.placeholder.com/80",
    prices: { Small: "£23.90", Medium: "£25.90", Large: "£27.90", XL: "£29.90" }
  }
];

function ProductList() {
  return (
    <section className="products">
      <div className="products-header">
        <h3>Pizzas</h3>
        <button>Sort by Pricing</button>
      </div>
      {products.map((p, i) => (
        <div key={i} className="product-card">
          <img src={p.img} alt={p.name} />
          <div className="product-info">
            <h4>{p.name}</h4>
            <p>{p.desc}</p>
            <div className="prices">
              {Object.entries(p.prices).map(([size, price], idx) => (
                <button key={idx}>{size} {price}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
