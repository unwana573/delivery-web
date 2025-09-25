import Chef from "../compnents/chef/chef";
import Exclusive from "../compnents/exclusive/exclusive";
import FAQSection from "../compnents/FAQSection/FAQSection";
import Fig from "../compnents/fig/fig";
import Hero from "../compnents/hero/hero";
import More from "../compnents/more/more";
import Order from "../compnents/order/order";

function Home(params) {
    return (
        <>
        <Hero />
        <Exclusive />
        <Order /> 
        <More />
        <Chef />
        <FAQSection />
        <Fig />
        </>
    );
}

export default Home;