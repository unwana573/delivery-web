import Info from "../components/info/info";
import Mac from "../components/mac/mac";
import Map from "../components/map/map";
import Offer from "../components/offers/offers";
import Review from "../components/review/review";

function Restaurant(params) {
    return (
        <>
        <Mac />
        <Offer />
        <Info />
        <Map />
        <Review />  
        </>
    );
}

export default Restaurant;
