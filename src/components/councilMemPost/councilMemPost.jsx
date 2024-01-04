import "./councilMemPost.css";

export const CouncilMemPost = (props) => {

  return (
    <div className="councilPostContainer">
      <div className="councilPostName">{props.post.name}</div>
      <img
        loading="lazy"
        className="councilPostImage"
        src={props.post.imageURL}
        alt="postImage"
      />
      <div
        className="councilPostDescription"
        dangerouslySetInnerHTML={{ __html: props.post.description }}
      />
      <div>{props.post.position}</div>
      <div>{props.post.insta}</div>
      <div>{props.post.phNumber}</div>
      <div>{props.post.email}</div>
    </div>
  );
};
