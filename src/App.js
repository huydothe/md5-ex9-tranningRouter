import logo from './logo.svg';
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Category from "./components/router2/Category";
import './App.css';
import Products from "./components/router2/Products";


function App() {
  return (
      <>
        <>
          <div className="app">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/about" element={<About/>}></Route>
            </Routes>

          </div>
        </>
        <>
          <Routes>
            <Route path="/" element={<Category/>}></Route>
            <Route path="/product" element={<Products/>}></Route>
          </Routes>
          //route
        </>
      </>
  );
}

export default App;
