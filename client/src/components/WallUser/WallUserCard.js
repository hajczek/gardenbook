import React from "react";
import RightBoxUser from "./RightBox/RightBoxUser";
import SearchPostsUser from "./SearchPostsUser";
import AddPostUser from "./AddPostUser";
import DisplayPostsUser from "./DisplayPostsUser";
import Footer from "../Page/Footer";

const WallUser = () => {
  return (
    <div className="contentUser">
      <SearchPostsUser />
      <AddPostUser />
      <DisplayPostsUser />
      <RightBoxUser />
      <Footer />
    </div>
  );
};

export default WallUser;
