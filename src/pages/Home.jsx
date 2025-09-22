import Exclusive from "../compnents/exclusive";
import Hero from "../compnents/hero";
import More from "../compnents/more";
import Order from "../compnents/order";

function Home(params) {
    return (
        <>
        <Hero />
        <Exclusive />
        <Order /> 
        <More />
        </>
    );
}

export default Home;