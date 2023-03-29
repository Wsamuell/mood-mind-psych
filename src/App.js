import React from "react";
import "./app.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import InfoBar from "./Components/InfoBar/InfoBar";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <InfoBar />
      <Navbar />
      {/* <Home />
      <Main />
      <Footer /> */}
    </>
  );
};
export default App;
