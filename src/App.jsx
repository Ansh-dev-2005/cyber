import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import About from "./components/About";
import Learn from "./components/Learn";
import Upes from "./components/Upes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Hero />
      </div>
      <div className="App">
        <Counter />
      </div>
      <div className="App">
        <About />
      </div>
      <div className="App">
        <Learn />
      </div>
      <div className="App">
        <Upes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
