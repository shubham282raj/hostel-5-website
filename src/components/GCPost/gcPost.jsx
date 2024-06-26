import { useRef, useState } from "react";
import "./gcPost.css";

export const GCPost = (props) => {
  const [openPost, setOpenPost] = useState(false);
  const contentToHideRef = useRef(null);
  return (
    <div className="gcPostContainer postContainer">
      <div className="imageContainer">
        <img
          loading="lazy"
          className="gcPostImage postImage"
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
            minHeight: "165px",
          }}
        >
          <div className="header">
            <div className="gcPostTitle postTitle">{props.post.title}</div>
            {props.post.score && (
              <div className="gcPostScore">
                Points Scored: {props.post.score}
              </div>
            )}
          </div>
          <div
            className="gcTeamDetails"
            dangerouslySetInnerHTML={{ __html: props.post.teamDetails }}
          />
          <div
            className="gcPostDescription postDescription"
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
