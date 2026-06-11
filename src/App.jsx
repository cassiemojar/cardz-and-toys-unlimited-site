import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";

function App() {
  

  return (
    <div className='App'>
        <div className='App-Component'>
            <div className='Nav-Component'>
                <NavBar />
                
            </div>
        </div>
        <div className='Hero-Background' id='Hero'>
            <div className='App-Component'>
                    <Hero />
            </div>
        </div>
        <Footer />
    </div>
    
  );
}

export default App
