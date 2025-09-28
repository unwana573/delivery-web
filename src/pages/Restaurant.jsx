import All from "../compnents/all/all";
import Info from "../compnents/info/info";
import Mac from "../compnents/mac/mac";
import Map from "../compnents/map/map";
import Offer from "../compnents/offers/offers";
import Review from "../compnents/review/review";

function Restaurant(params) {
    return (
        <>
        <Mac />
        <Offer />
        <All />
        <Info />
        <Map />
        <Review />  
        </>
    );
}

export default Restaurant;
