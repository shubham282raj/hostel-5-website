import { useState } from "react";
import "./galaryPost.css";

export const GalaryPost = (props) => {
  const [openPost, setOpenPost] = useState(false);

  return (
    <div className="gcPostContainer postContainer">
      <div className="header">
        <div className="gcPostTitle postTitle">{props.post.title}</div>
        {props.post.score && <div className="gcPostScore">Points Scored: {props.post.score}</div>}
      </div>
      <img
        className="gcPostImage postImage"
        src={props.post.imageURL}
        alt="postImage"
      />
      <div
        onClick={() => setOpenPost(!openPost)}
        style={{ maxHeight: openPost ? "1000px" : "150px" }}
      >
        <div
          className="gcTeamDetails"
          dangerouslySetInnerHTML={{ __html: props.post.teamDetails }}
        />
        <div
          className="gcPostDescription postDescription"
          dangerouslySetInnerHTML={{ __html: props.post.description }}
        />
      </div>
      {/* <div className="footer">@{props.post.username}</div> */}
    </div>
  );
};
