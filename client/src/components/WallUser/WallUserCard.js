import React from "react";
import RightBoxUser from "./RightBox/RightBoxUser";
import LeftBoxUser from "./LeftBox/LeftBoxUser";
import Footer from "../Page/Footer";

const WallUser = () => {
  return (
    <div className="user-content">
      <LeftBoxUser />
      <RightBoxUser />
      <Footer />
    </div>
  );
};

export default WallUser;
