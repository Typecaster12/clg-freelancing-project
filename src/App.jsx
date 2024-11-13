import Header from "./Components/Headers/Header";
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <About />
                <Services />
            </main>
        </>
    )
}

export default App;
