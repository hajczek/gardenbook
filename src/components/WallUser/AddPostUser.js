import React from "react";

const AddPostUser = () => {
  return (
    <form id="add-post">
      <label htmlFor="newPost">Dodaj Post</label>
      <input
        type="text"
        id="new-post"
        name="new-post"
        placeholder="Napisz coś ... "
      />
      <input type="file" />
      <input type="submit" value="+" />
    </form>
  );
};

export default AddPostUser;
