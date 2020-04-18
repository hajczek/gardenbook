import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

const DisplayPostsUser = () => {
  return (
    <div className="container">
      <h2>User1</h2>
      <p id="time">1 godz.</p>
      <a href="#" id="comments-link">
        5 komentarzy
      </a>
      <a href="#" id="archive-post">
        <FontAwesomeIcon icon={faArchive} />
      </a>
      <p id="post">
        Maecenas tristique, risus eget lacinia pellentesque, arcu erat posuere
        quam, sit amet placerat nunc ipsum laoreet massa. Cras pharetra.
      </p>
      <img src="#" alt="picture" />
      <form id="add-comment">
        <input
          type="text"
          id="new-comment"
          name="new-comment"
          placeholder="Dodaj komentarz ... "
        />
        <input type="file" />
        <input type="submit" value="+" />
      </form>
      <p id="comment">Maecenas tristique, risus eget lacinia </p>
      <p id="time">30 min.</p>
    </div>
  );
};

export default DisplayPostsUser;
