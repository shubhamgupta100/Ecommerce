import "./App.css";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./components/Home/Home";
import ProductsDetails from "./components/Product/ProductsDetails";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Droid Serif", "Roboto"],
      },
    });
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductsDetails} />
      </Router>
    </>
  );
}

export default App;
