import "./offers.css";
import React, { useState } from "react";
import burgers from "../../testData/burgerData"
import fries from "../../testData/friesdata"
import snacks from "../../testData/snacksdata"
import salad from "../../testData/saladdata"
import cold_drink from "../../testData/cold_drink_data"
import dessert from "../../testData/dessertdata"

function Offer() {
    const [activeTab, setActiveTab] = useState("offers");

return (
    <>
        <div className="off">
            <div className="off_1">
                <ul>
                    <li>
                        <h1>All Offers McDonald`s East London</h1>
                    </li>
                    <li>
                    <input type="search" name="menu" placeholder="Search from menu"/>
                    </li>
                </ul>
                </div>

        {/* Tabs */}
        <div className="off_2">
            <ul>
                <li
                    className={activeTab === "offers" ? "active" : ""}
                    onClick={() => setActiveTab("offers")}
            >
                Offers
            </li>
            <li
                className={activeTab === "Burgers" ? "active" : ""}
                onClick={() => setActiveTab("Burgers")}
            >
                Burgers
            </li>
            <li
                className={activeTab === "Fries" ? "active" : ""}
                onClick={() => setActiveTab("Fries")}
            >
                Fries
            </li>
            <li
                className={activeTab === "Snacks" ? "active" : ""}
                onClick={() => setActiveTab("Snacks")}
            >
                Snacks
            </li>
            <li
                className={activeTab === "Salad" ? "active" : ""}
                onClick={() => setActiveTab("Salad")}
            >
                Salad
            </li>
            <li
                className={activeTab === "Cold" ? "active" : ""}
                onClick={() => setActiveTab("Cold")}
            >
                Cold drink
            </li>
            <li
                className={activeTab === "Desserts" ? "active" : ""}
                onClick={() => setActiveTab("Desserts")}
            >
                Desserts
            </li>
            <li
                className={activeTab === "Hot" ? "active" : ""}
                onClick={() => setActiveTab("Hot")}
            >
                Hot drinks
            </li>
            <li
                className={activeTab === "Sauces" ? "active" : ""}
                onClick={() => setActiveTab("Sauces")}
            >
                Sauces
            </li>
            <li
                className={activeTab === "Orbit" ? "active" : ""}
                onClick={() => setActiveTab("Orbit")}
            >
                Orbit
            </li>
            </ul>
        </div>

        {/* Display section */}
        <div className="offers-content">
            {activeTab === "Burgers" && (
                <div className="burgers-section">
                    <h1>Burgers</h1>
                <div className="burgers-grid">
                    {burgers.map((burger, index) => (
                <div key={index} className="burger-card">
                    <div className="burger-info">
                        <h4>{burger.title}</h4>
                        <p>{burger.description}</p>
                        <p className="price">{burger.price}</p>
                    </div>
                    <div className="burger-img-container">
                        <img src={burger.img} alt={burger.title} />
                        <button className="add-btn">+</button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            )}
        </div>

        <div className="offers-content">
            {activeTab === "Fries" && (
                <div className="burgers-section">
                    <h1>Fries</h1>
                <div className="burgers-grid">
                    {fries.map((fries, index) => (
                <div key={index} className="burger-card">
                    <div className="burger-info">
                        <h4>{fries.title}</h4>
                        <p>{fries.description}</p>
                        <p className="price">{fries.price}</p>
                    </div>
                    <div className="burger-img-container">
                        <img src={fries.img} alt={fries.title} />
                        <button className="add-btn">+</button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            )}
        </div>

        <div className="offers-content">
            {activeTab === "Snacks" && (
                <div className="burgers-section">
                    <h1>Snacks</h1>
                <div className="burgers-grid">
                    {snacks.map((snacks, index) => (
                <div key={index} className="burger-card">
                    <div className="burger-info">
                        <h4>{snacks.title}</h4>
                        <p>{snacks.description}</p>
                        <p className="price">{snacks.price}</p>
                    </div>
                    <div className="burger-img-container">
                        <img src={snacks.img} alt={snacks.title} />
                        <button className="add-btn">+</button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            )}
        </div>

        <div className="offers-content">
            {activeTab === "Salad" && (
                <div className="burgers-section">
                    <h1>Salad</h1>
                <div className="burgers-grid">
                    {salad.map((salad, index) => (
                <div key={index} className="burger-card">
                    <div className="burger-info">
                        <h4>{salad.title}</h4>
                        <p>{salad.description}</p>
                        <p className="price">{salad.price}</p>
                    </div>
                    <div className="burger-img-container">
                        <img src={salad.img} alt={salad.title} />
                        <button className="add-btn">+</button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            )}
        </div>

        <div className="offers-content">
            {activeTab === "Cold" && (
                <div className="burgers-section">
                    <h1>Cold drink</h1>
                <div className="burgers-grid">
                    {cold_drink.map((cold_drink, index) => (
                <div key={index} className="burger-card">
                    <div className="burger-info">
                        <h4>{cold_drink.title}</h4>
                        <p>{cold_drink.description}</p>
                        <p className="price">{cold_drink.price}</p>
                    </div>
                    <div className="burger-img-container">
                        <img src={cold_drink.img} alt={cold_drink.title} />
                        <button className="add-btn">+</button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            )}
        </div>

        <div className="offers-content">
            {activeTab === "Desserts" && (
                <div className="burgers-section">
                    <h1>Desserts</h1>
                <div className="burgers-grid">
                    {dessert.map((dessert, index) => (
                <div key={index} className="burger-card">
                    <div className="burger-info">
                        <h4>{dessert.title}</h4>
                        <p>{dessert.description}</p>
                        <p className="price">{dessert.price}</p>
                    </div>
                    <div className="burger-img-container">
                        <img src={dessert.img} alt={dessert.title} />
                        <button className="add-btn">+</button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            )}
        </div>

        {activeTab === "offers" && (
            <div className="default-section">
                <h2>Welcome to McDonald's East London!</h2>
                <p>Select a category to view offers.</p>
            </div>
            )}
    </div>
    </>
);
}

export default Offer;
