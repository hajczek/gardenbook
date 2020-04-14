import React from "react";
import HeaderUser from "./HeaderUser";
import LeftMenuUser from "./LeftMenuUser";
import Footer from "../Page/Footer";

const PageCard = () => {
  return (
    <div className="userContentPage">
      <HeaderUser />
      <LeftMenuUser />
      <Footer />
    </div>
  );
};

export default PageCard;
