import Header from "./Components/Headers/Header";
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import JoinUs from "./Components/JoinUs/JoinUs";
import Freelancer from "./Components/Freelancer/Freelancer";
import PricingSection from "./Components/Pricing/Pricing";
import Qa from "./Components/QA/Qa";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <About />
                <Services />
                <JoinUs />
                <Freelancer />
                <PricingSection />
                <Qa />
                <Footer />
            </main>
        </>
    )
}

export default App;
