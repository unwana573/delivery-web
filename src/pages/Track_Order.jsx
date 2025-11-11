import OrderPage from "../components/all/Orderpage";
import Info from "../components/info/info";
import Mac from "../components/mac/mac";
import Map from "../components/map/map";
import Review from "../components/review/review";

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
