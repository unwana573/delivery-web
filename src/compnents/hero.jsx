import "./hero.css";
import pizza from "../assets/hero_1-removebg-preview.png";
import she from "../assets/hero.png"
import hero_img from "../assets/logo.png"

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-1">
                    <h5>Order Restaurant food, takeaway and groceries.</h5>
                    <h1>Feast Your Senses, <br /> <span>Fast and Fresh</span></h1>
                    <form>
                        <p>Enter a postcode to see what we deliver</p>
                        <div className="subscribe-box">
                        <form>
                        <div className="input-group">
                            <input type="email" placeholder="youremail@gmail.com" required />
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                    </div>
                    </form>
                </div>
                <div className="hero-2">
                    <img className="img-1" src={ she } alt="hero-img" />
                    <img className="img-2" src={ pizza }  alt="hero-img" />
                </div>
                <div className="hero-3">
                    <h1></h1>
                    <li className="sub-1">
                        <img src={ hero_img } alt="" />
                        <h6>Wev`ve Received your order</h6>
                        <p>Awaiting Resturant acceptance</p>
                    </li>
                    <li className="sub-2">
                        <img src={ hero_img } alt="" />
                        <h6>Order Accepted</h6>
                        <p>Your order will be delivered shortly</p>
                    </li>
                    <li className="sub-3">
                        <img src={ hero_img } alt="" />
                        <h6>Your rider`s nearby</h6>
                        <p>They`re almost there-get ready!</p>
                    </li>
                </div>
            </div>
        </>
    );
}

export default Hero;