import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Maincontent />
      <Footer />
    </div>
  );
}
export default App;
