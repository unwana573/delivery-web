import "./offers.css"
import React, { useState } from "react";

function Offer() {
    const [activeTab, setActiveTab] = useState("offers");

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