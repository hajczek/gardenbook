import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

const DisplayPostsUser = () => {
  return (
    <div className="post-container">
      <div className="post-container-top">
        <h2>User1</h2>
        <div className="post-comments-box">
          <span id="time">1 godz.</span>
          <a href="#" id="comments-link">
            5 komentarzy
          </a>
          <a href="#" id="archive-post">
            <FontAwesomeIcon icon={faArchive} />
          </a>
        </div>
      </div>
      <p id="post">
        Maecenas tristique, risus eget lacinia pellentesque, arcu erat posuere
        quam, sit amet placerat nunc ipsum laoreet massa. Cras pharetra.
      </p>
      <img
        src="https://images.pexels.com/photos/158636/background-beautiful-beauty-bloom-158636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="picture"
      />
      <form id="add-comment">
        <input
          type="text"
          name="new-comment"
          placeholder="Napisz komentarz ... "
          className="new-comment"
        />
        <div className="add-comment-buttons">
          <input type="file" className="add-file-btn" title="Dodaj zdjęcie" />
          <input
            className="add-comment-btn"
            type="submit"
            value="+"
            title="Dodaj komentarz"
          />
        </div>
      </form>
      <p className="comment">Maecenas tristique, risus eget lacinia </p>
      <p className="time">30 min.</p>
    </div>
  );
};

export default DisplayPostsUser;
