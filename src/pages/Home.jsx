import Chef from "../components/chef/chef";
import Exclusive from "../components/exclusive/exclusive";
import FAQSection from "../components/FAQSection/FAQSection";
import Fig from "../components/fig/fig";
import Hero from "../components/hero/hero";
import More from "../components/more/more";
import Order from "../components/order/order";

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