import "./offers.css";
import React, { useState } from "react";
import burgers from "../../testData/burgerData";
import fries from "../../testData/friesdata";
import snacks from "../../testData/snacksdata";
import salad from "../../testData/saladdata";
import cold_drink from "../../testData/cold_drink_data";
import dessert from "../../testData/dessertdata";

function Offer() {
  const [activeTab, setActiveTab] = useState("offers");

  const tabs = [
    "offers", "Burgers", "Fries", "Snacks",
    "Salad", "Cold", "Desserts", "Hot", "Sauces", "Orbit"
  ];

  const dataMap = {
    Burgers: burgers,
    Fries: fries,
    Snacks: snacks,
    Salad: salad,
    Cold: cold_drink,
    Desserts: dessert,
  };

  return (
    <div className="off">
      {/* Header Section */}
      <div className="off_1">
        <ul>
          <li>
            <h1>All Offers – McDonald's East London</h1>
          </li>
          <li>
            <input type="search" placeholder="Search from menu" />
          </li>
        </ul>
      </div>

      {/* Tabs */}
      <div className="off_2">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Cold" ? "Cold Drinks" : tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Display */}
      <div className="offers-content">
        {activeTab === "offers" ? (
          <div className="default-section fade-in">
            <h2>Welcome to McDonald's East London!</h2>
            <p>Select a category to view offers.</p>
          </div>
        ) : (
          <div className="burgers-section fade-in">
            <h1>{activeTab}</h1>
            <div className="burgers-grid">
              {dataMap[activeTab]?.map((item, index) => (
                <div key={index} className="burger-card">
                  <div className="burger-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <p className="price">{item.price}</p>
                  </div>
                  <div className="burger-img-container">
                    <img src={item.img} alt={item.title} />
                    <button className="add-btn">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Offer;
