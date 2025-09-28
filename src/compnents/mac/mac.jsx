import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import  burge  from "../../assets/burger_2.avif";
import  burger  from "../../assets/burger_2.avif";
import "./mac.css"

function Mac() {
    return(
        <>
            <div className="mac">
            {/* <div className="sub">
                <img className="mac_pix" src={ burger } alt="" />
            </div> */}
                <div className="mac_1">
                        <ul>
                            <li>
                                <p>I`m lovin`    it!</p>
                                <h1>McDonald`s East London</h1>
                                <ol>
                                    <button>
                                        <FontAwesomeIcon icon={faTableList} />     Minimum Order:12 GBP
                                    </button>
                                    <button>
                                        <FontAwesomeIcon icon={ faTruck } />        Delivery in 20-25 Minutes
                                    </button>
                                </ol>
                            </li>
                        </ul>
                </div>
                <div className="mac_2">
                    <img src={ burge } alt="" />
                </div>
            </div>
        </>
    );
}

export default Mac