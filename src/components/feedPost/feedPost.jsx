import { useState } from "react";
import "./feedPost.css";

export const FeedPost = (props) => {

    const [openPost, setOpenPost] = useState(false)

  return (
    <div className="feedPostContainer postContainer">
      <div className="feedPostTitle">{props.post.title}</div>
      <img
        className="feedPostImage"
        src={props.post.imageURL}
        alt="postImage"
      />
      <div className="feedPostDescription"  onClick={()=>setOpenPost(!openPost)} style={{maxHeight: openPost ? "1000px" : "150px"}} dangerouslySetInnerHTML={{__html: props.post.description}}/>
      {/* <div className="footer">@{props.post.username}</div> */}
    </div>
  );
};
