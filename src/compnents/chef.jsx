import "./chef.css"
import chefImg from "../assets/chef.jpg"
import chefImg_1 from "../assets/deliver.jpg"

function Chef() {
    return(
        <>
        <div className="chef">
            <div className="card">
                <img src={ chefImg } alt="Chef Partner" />

            <div className="tag">Earn more with lower fees</div>

            <div className="content">
                <p>Signup as a business</p>
                <h1>Partner with us</h1>
                <button className="btn">Get Started</button>
            </div>
            </div>
            <div className="card">
                <img src={ chefImg_1 } alt="Chef Partner" />

            <div className="tag">Avail exclusive parks</div>

            <div className="content">
                <p>Signup as a rider</p>
                <h1>Ride with us</h1>
                <button className="btn">Get Started</button>
            </div>
            </div>
            </div>
        </>
    );
}


export default Chef