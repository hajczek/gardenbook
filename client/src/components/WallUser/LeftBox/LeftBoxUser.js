import React from 'react';
import WallInfo from './WallInfo';
import SearchPostsUser from './SearchPostsUser';
import AddPostUser from './AddPostUser';
import DisplayPostsUser from './DisplayPostsUser';

const LeftBoxUser = () => {
  return (
    <div className="user-left-box">
      <WallInfo />
      <SearchPostsUser />
      <AddPostUser />
      <DisplayPostsUser />
    </div>
  );
};

export default LeftBoxUser;
