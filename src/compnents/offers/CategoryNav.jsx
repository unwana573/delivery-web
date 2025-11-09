import "./offers.css";

function CategoryNav({ active, setActive }) {
  const categories = [
    "offers", "Burgers", "Fries", "Snacks", "Salad",
    "Cold drink", "Desserts", "Hot drinks", "Sauces", "Orbit"
  ];

  return (
    <div className="category-nav">
      {categories.map((item) => (
        <button
          key={item}
          className={`category-item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryNav;
