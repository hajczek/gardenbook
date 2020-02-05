import React from "react";
import Header from "./components/Page/Header";
import Info from "./components/Page/Info";
import MoreInfo from "./components/Page/MoreInfo";
import Footer from "./components/Page/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Info />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default App;
