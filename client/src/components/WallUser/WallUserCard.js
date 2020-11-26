import React from 'react';
import RightBoxUser from './RightBox/RightBoxUser';
import LeftBoxUser from './LeftBox/LeftBoxUser';

const WallUser = () => {
  return (
    <div className="user-content">
      <LeftBoxUser />
      <RightBoxUser />
    </div>
  );
};

export default WallUser;
