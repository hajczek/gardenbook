import React from 'react';
import NewPosts from './NewPosts';
import ArchivedPosts from './ArchivedPosts';
import ContactsBook from './ContactsBook';
import AdvertisementBox from './AdvertisementBox';

const RightBoxUser = () => {
  return (
    <div className="user-wall-right-box">
      <AdvertisementBox />
      <NewPosts />
      <ArchivedPosts />
      <ContactsBook />
    </div>
  );
};

export default RightBoxUser;
