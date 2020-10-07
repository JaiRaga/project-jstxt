import React from "react";
import "./App.css";
// import Editor from "./components/editor/Editor";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
