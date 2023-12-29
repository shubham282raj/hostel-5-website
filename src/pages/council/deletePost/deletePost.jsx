import React, { useState } from "react";
import "./deletePost.css";
import { useLoadContent } from "../../../components/loadPost/useLoadContent";
import { LoadingAnimation } from "../../../components/loadingAnimation/loadingAnimation";
import { useDeletePost } from "./components/useDeletePost";

const DeletePost = () => {
  const divisionObject = {
    cult: ["home", "feed", "gc", "galary"],
    tech: ["home", "feed", "gc", "galary"],
    sports: ["home", "feed", "gc", "galary"],
    mess: ["home", "menu"],
    council: ["home", "Secretary", "Coordinator", "StudentCouncil", "Office"],
  };

  const [division, setDivision] = useState("null");
  const [postType, setPostType] = useState("null");

  const [content] = useLoadContent(`${division}/${postType}/${postType}`);

  // useEffect(() => {
  //   console.log(division, postType)
  // }, [division]);

  const {deleteThisPost} = useDeletePost();

  return (
    <div>
      {/* {divisionSubmit && <span>&#60;-</span>} */}
      <h2 id="createPostHeader">Delete Post</h2>
      <>
        <div className="createPostSelectMenu">
          <span>Division:</span>
          <select
            id="divisionSelect"
            onChange={(e) => setDivision(e.target.value)}
          >
            <option>Select Division</option>
            {Object.keys(divisionObject).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
          <br></br>
          <span>Post Type:</span>
          <select
            id="postTypeSelect"
            onChange={(e) => setPostType(e.target.value)}
          >
            <option>Select Post Type</option>
            {divisionObject[division]?.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        {division!=="null" && postType!=="null" && <button className="GetPostBtn" onClick={content.getPosts}>Get Posts</button>}
      </>
      <>
        {content.postsList?.map((post,key)=>{
            return(
                <div className="deletePostChild" key={key}>
                    <div className="content">
                        <div className="title">{post?.title}</div>
                        <div className="description">{post?.description}</div>
                        <div className="date">{new Date(post?.timestamp.seconds * 1000).toLocaleString()}</div>
                        <div>{post?.username}</div>
                    </div>
                    <div>
                        <div className="deleteBtn" onClick={()=>deleteThisPost(post, `${division}/${postType}/${postType}/${post.id}`)}>
                            X
                        </div>
                    </div>
                </div>
            )
        })}
        {content.loading && <LoadingAnimation loadingText={true} marginTop="40px" />}
        {content.hasMore && <button className="tabLoadMoreBtn" onClick={content.loadMore}>Load More</button>}
      </>
    </div>
  );
};

export default DeletePost;
