import { useState } from "react";
import "./feedPost.css";

export const FeedPost = (props) => {
  const [openPost, setOpenPost] = useState(false);

  return (
    <div className="feedPostContainer postContainer">
      <div className="feedPostTitle postTitle">{props.post.title}</div>
      <img
        className="feedPostImage postImage"
        src={props.post.imageURL}
        alt="postImage"
      />
      <div
        className="contentToHide"
        style={{ maxHeight: openPost ? "fit-content" : "105px" }}
      >
        <div
          className="feedPostDescription postDescription"
          dangerouslySetInnerHTML={{ __html: props.post.description }}
        />
      </div>
      <div onClick={() => setOpenPost(!openPost)} className="toggleRead">
        {openPost ? "Read Less" : "Read More"}
      </div>
      {/* <div className="footer">@{props.post.username}</div> */}
    </div>
  );
};
