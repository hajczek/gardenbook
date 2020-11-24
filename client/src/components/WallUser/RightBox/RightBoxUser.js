import React from 'react';
import NewPosts from './NewPosts';
import ArchivedPosts from './ArchivedPosts';
import ContactsBook from './ContactsBook';
import AdvertisementBox from './AdvertisementBox';

const RightBoxUser = () => {
  return (
    <div class="user-wall-right-box">
      <NewPosts />
      <ArchivedPosts />
      <ContactsBook />
      <AdvertisementBox />
    </div>
  );
};

export default RightBoxUser;
