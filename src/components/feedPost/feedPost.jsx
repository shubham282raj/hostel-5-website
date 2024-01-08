import { useRef, useState } from "react";
import "./feedPost.css";

export const FeedPost = (props) => {
  const [openPost, setOpenPost] = useState(false);
  const contentToHideRef = useRef(null);
  return (
    <div className="feedPostContainer postContainer">
      <div className="imageContainer">
        <img
          loading="lazy"
          className="feedPostImage postImage"
          src={props.post.imageURL}
          alt="postImage"
        />
      </div>
      <div className="text">
        <div
          className="contentToHide"
          ref={contentToHideRef}
          style={{
            maxHeight: openPost
              ? contentToHideRef.current.scrollHeight + "px"
              : "165px",
            minHeight: "165px"
          }}
        >
          <div className="feedPostTitle postTitle">{props.post.title}</div>
          <div
            className="feedPostDescription postDescription"
            dangerouslySetInnerHTML={{ __html: props.post.description }}
          />
        </div>
        <div onClick={() => setOpenPost(!openPost)} className="toggleRead">
          {openPost ? "Read Less" : "Read More"}
        </div>
      </div>
      {/* <div className="footer">@{props.post.username}</div> */}
    </div>
  );
};
