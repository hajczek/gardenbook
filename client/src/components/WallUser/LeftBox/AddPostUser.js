import React from "react";

const AddPostUser = () => {
  return (
    <form id="add-post">
      <label htmlFor="newPost">Dodaj Post</label>
      <textarea
        id="new-post"
        name="newPost"
        placeholder="Napisz coś ... "
      ></textarea>
      <div class="add-post-buttons">
        <input className="add-file-btn" type="file" />
        <input className="add-post-btn" type="submit" value="+" />
      </div>
    </form>
  );
};

export default AddPostUser;
