function Sidebar() {
  const menuItems = [
    "Pizzas", "Garlic Bread", "Calzone", "Kebabs", "Salads",
    "Cold drinks", "Happy Meal*", "Desserts", "Hot drinks",
    "Sauces", "Orbit*"
  ];

  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <ul>
        {menuItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="offer">
        <p>-20% Special Offer</p>
        <small>First Order Discount</small>
      </div>
    </aside>
  );
}

export default Sidebar;
