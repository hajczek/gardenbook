import React from "react";
import Header from "./Header";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import Footer from "./Footer";
// import UserRegistration from "./UserRegistration";
// import UserLogin from "./UserLogin";

const PageCard = () => {
  return (
    <div className="contentPage">
      <Header />
      <Info />
      {/* <UserRegistration />
      <UserLogin /> */}
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default PageCard;
