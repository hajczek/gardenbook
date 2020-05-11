import React from "react";
// import HeaderUser from "../UserElemCard/HeaderUser";
// import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import RightBoxUser from "./RightBox/RightBoxUser";
import SearchPostsUser from "./SearchPostsUser";
import AddPostUser from "./AddPostUser";
import DisplayPostsUser from "./DisplayPostsUser";
import Footer from "../Page/Footer";

const WallUser = () => {
  return (
    <div className="contentUser">
      {/* <HeaderUser />
      <LeftMenuUser /> */}
      <SearchPostsUser />
      <AddPostUser />
      <DisplayPostsUser />
      <RightBoxUser />
      <Footer />
    </div>
  );
};

export default WallUser;
