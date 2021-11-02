import "./App.css";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./components/Home/Home";

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
        <Home />
      </Router>
    </>
  );
}

export default App;
