import "./App.css";
import Navbar from "./container/Navbar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./container/Home";
import Product from "./container/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/product/:id" component={Product}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
