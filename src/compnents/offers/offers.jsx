import "./offers.css"
import React, { useState } from "react";
import burger1 from "../../assets/burger_2.avif"
import burger2 from "../../assets/burge_1.avif"
import burger3 from "../../assets/burge.avif"
import burger4 from "../../assets/burger_3.jpg"
import burger5 from "../../assets/burger_4.jpg"
import burger6 from "../../assets/burger_5.jpg"
import burger7 from "../../assets/burger_6.jpg"
import burger8 from "../../assets/burger_7.jpg"
import burger9 from "../../assets/burger_8.jpg"

function Offer() {
    const [activeTab, setActiveTab] = useState("offers");
        
     const burgers = [
    {
        img: burger1,
        title: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger2,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger3,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger4,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger5,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger6,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger7,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger8,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    {
        img: burger9,
        title: "The classics for 3",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 2 medium sized French Fries, 3 cold drinks",
        price: "GBP 23.10",
    },
    ];

    const burgerOffers = () =>{
        console.log("burger offer clicked");

            // const [activeTab, setActiveTab] = useState("Burgers");
   
return (
    <>
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

        
    </>
)
    }

    return(
        <>
            <div className="off">
                <div className="off_1">
                    <ul>
                        <li>
                            <h1>All Offers McDonald`s East London</h1>
                        </li>
                        <li>
                            <input type="search" name="menu" id="" placeholder="    Search from menu"/>
                        </li>
                    </ul>
                </div> 
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
                                onClick={() => burgerOffers()}
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
                                className={activeTab === "Happy" ? "active" : ""}
                                onClick={() => setActiveTab("Happy")}
                            >
                                Happy meal
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
            </div>
        </>
    );
}

export default Offer 