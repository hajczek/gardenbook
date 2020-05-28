import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

const ArchivedPosts = () => {
  return (
    <div className="archived-posts">
      <div className="archived-posts-top">
        <FontAwesomeIcon icon={faArchive} />
        <h3>Zarchiwizowane</h3>
      </div>
      <ul id="archived-posts-list">
        <li>
          15-05-2019 <a href="#">Fragment of post ..</a>
        </li>
      </ul>
    </div>
  );
};

export default ArchivedPosts;
