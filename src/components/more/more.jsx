import "./more.css"
import couple from "../../assets/efhwveui-removebg-preview.png"
import apple from "../../assets/applestore.png"
import google from "../../assets/playstore.png"

function More() {
    return(
        <>
            <div className="more">                
                <div className="more-1">
                    <img src={ couple } alt="" />
                </div>
                <div className="more-2">
                    <h1>Ordering is more</h1>
                    <h2><span>Personalised</span> & instant</h2>
                    <p>Download the order.uk app for faster ordering</p>
                    <ul>
                        <li>
                            <img src={ apple } alt="" />
                        </li>
                        <li>
                            <img src={ google } alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default More 