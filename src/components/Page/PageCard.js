import React from "react";
import Header from "./Header";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import Footer from "./Footer";

const PageCard = () => {
  return (
    <div className="contentPage">
      <Header />
      <Info />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default PageCard;
