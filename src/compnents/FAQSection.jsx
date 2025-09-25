import React, { useState } from "react";
import "./FAQSection.css";
import orderImg from "../assets/copy.png";
import trackImg from "../assets/burger.png";
import deliveryImg from "../assets/phone.png";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <div className="faq-container">

      {/* Tabs */}
      <div className="tabs">
      <h2>Know more about us!</h2>
        <button
          className={activeTab === "faq" ? "active" : ""}
          onClick={() => setActiveTab("faq")}
        >
          Frequent Questions
        </button>
        <button
          className={activeTab === "who" ? "active" : ""}
          onClick={() => setActiveTab("who")}
        >
          Who we are?
        </button>
        <button
          className={activeTab === "partner" ? "active" : ""}
          onClick={() => setActiveTab("partner")}
        >
          Partner Program
        </button>
        <button
          className={activeTab === "help" ? "active" : ""}
          onClick={() => setActiveTab("help")}
        >
          Help & Support
        </button>
      </div>

      {/* FAQ Content */}
      {activeTab === "faq" && (
        <div className="faq-content">
          {/* Left Questions */}
          <div className="faq-questions">
            <button className="highlight">How does Order.UK work?</button>
            <p>What payment methods are accepted?</p>
            <p>Can I track my order in real-time?</p>
            <p>Are there any special discounts or promotions available?</p>
            <p>Is Order.UK available in my area?</p>
          </div>

          {/* Right Steps */}
          <div className="faq-steps">
            <div className="step-card">
              <img src={orderImg} alt="Place Order" />
              <h4>Place an Order!</h4>
              <p>Place order through our website or Mobile app</p>
            </div>
            <div className="step-card">
              <img src={trackImg} alt="Track Progress" />
              <h4>Track Progress</h4>
              <p>You can track your order status with delivery time</p>
            </div>
            <div className="step-card">
              <img src={deliveryImg} alt="Get Your Order" />
              <h4>Get your Order!</h4>
              <p>Receive your order at a lightning fast speed!</p>
            </div>
          </div>
        </div>
      )}
      <p className="bottom-text">
        Order.UK simplifies the food ordering process. Browse through our diverse menu,
        select your favorite dishes, and proceed to checkout. Your delicious meal will
        be on its way to your doorstep in no time!
      </p>

      {/* Bottom Description */}
    </div>
  );
};

export default FAQSection;
