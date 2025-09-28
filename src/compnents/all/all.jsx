import "./all.css"
import React, { useState } from "react";
import "../../compnents/offers/offers"
import burger1 from "../../assets/burger_2.avif"
import burger2 from "../../assets/burge_1.avif"
import burger3 from "../../assets/burge.avif"
import burger4 from "../../assets/burger_3.jpg"
import burger5 from "../../assets/burger_4.jpg"
import burger6 from "../../assets/burger_5.jpg"
import burger7 from "../../assets/burger_6.jpg"
import burger8 from "../../assets/burger_7.jpg"
import burger9 from "../../assets/burger_8.jpg"

function All() {
    const [activeTab, setActiveTab] = useState("Burgers");
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

        {/* {activeTab === "Fries" && ( 
            <div className="burgers-section">
                <h2>Burgers</h2>
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
        )} */}
    </>
);
}


export default All