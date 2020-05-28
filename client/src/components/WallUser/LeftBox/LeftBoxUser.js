import React from "react";
import SearchPostsUser from "./SearchPostsUser";
import AddPostUser from "./AddPostUser";
import DisplayPostsUser from "./DisplayPostsUser";

const LeftBoxUser = () => {
  return (
    <div class="user-left-box">
      <SearchPostsUser />
      <AddPostUser />
      <DisplayPostsUser />
    </div>
  );
};

export default LeftBoxUser;
