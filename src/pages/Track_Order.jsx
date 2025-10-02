import OrderPage from "../compnents/all/all";
import Info from "../compnents/info/info";
import Mac from "../compnents/mac/mac";
import Map from "../compnents/map/map";
import Review from "../compnents/review/review";

function Track_Order(params) {
    return (
        <>
            <Mac />
            <OrderPage />
            <Info />
            <Map /> 
            <Review />
        </>
    );
}

export default Track_Order;
