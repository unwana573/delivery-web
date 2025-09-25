import Chef from "../compnents/chef";
import Exclusive from "../compnents/exclusive";
import FAQSection from "../compnents/FAQSection";
import Fig from "../compnents/fig";
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
        <Chef />
        <FAQSection />
        <Fig />
        </>
    );
}

export default Home;