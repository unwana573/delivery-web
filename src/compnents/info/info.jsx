import React, { useState } from "react";
import "./info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faAlarmClock } from "@fortawesome/free-regular-svg-icons";

function Info() {
    const [activeTab, setActiveTab] = useState("delivery");

    return (
    <div className="tabs-container">
        <div
            className={`tab ${activeTab === "delivery" ? "active" : ""}`}
            onClick={() => setActiveTab("delivery")}
        >
        <h3><FontAwesomeIcon icon={faLocationDot} />Delivery information</h3>
        <p><b>Monday:</b>  12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
        <p><b>Tuesday:</b>  8:00 AM–3:00 AM</p>
        <p><b>Wednesday:</b>  8:00 AM–3:00 AM</p>
        <p><b>Thursday:</b>  8:00 AM–3:00 AM</p>
        <p><b>Friday:</b>  8:00 AM–3:00 AM</p>
        <p><b>Saturday:</b>  8:00 AM–3:00 AM</p>
        <p><b>Sunday:</b>  8:00 AM–12:00 AM</p>
        <p>Estimated time until delivery: 20min</p>
        {/* More content */}
        </div>

        <div
            className={ `tab ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")} 
        >
        <h3><FontAwesomeIcon icon={ faListCheck  } />Contact information</h3>
        <p>If you have allergies or other dietary <br />restrictions, please contact the restaurant. The <br />restaurant will provide food-specific <br />infomations upon request</p>
        <p ><b>Phone number: </b> +934443-43</p>
        <p><b>Website: </b>bhttp://mcdonalds.uk/</p>
        </div>

        <div
            className={`tab ${activeTab === "times" ? "active" : ""}`}
            onClick={() => setActiveTab("times")}
        >
        <h3><FontAwesomeIcon icon={faAlarmClock} />Operational Times</h3>
        <p><b>Monday:</b> 12:00 AM–3:00 AM</p>
        <p><b>Tuesday:</b> 8:00 AM–3:00 AM</p>
        <p><b>Wednesday:</b> 8:00 AM–3:00 AM</p>
        <p><b>Thursday:</b> 8:00 AM–3:00 AM</p>
        <p><b>Friday:</b> 8:00 AM–3:00 AM</p>
        <p><b>Saturday:</b> 8:00 AM–3:00 AM</p>
        <p><b>Sunday:</b> 8:00 AM–3:00 AM</p>
        {/* More content */}
        </div>
    </div>
);
};

export default Info;
