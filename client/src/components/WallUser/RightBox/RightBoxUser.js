import React from "react";
import NewPosts from "./NewPosts";
import ArchivedPosts from "./ArchivedPosts";
import ContactsBook from "./ContactsBook";

const RightBoxUser = () => {
  return (
    <div class="user-wall-right-box">
      <NewPosts />
      <ArchivedPosts />
      <ContactsBook />
    </div>
  );
};

export default RightBoxUser;
