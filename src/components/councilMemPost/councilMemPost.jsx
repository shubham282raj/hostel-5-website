import "./councilMemPost.css";
import councilBG from "./councilBg.jpg";

export const CouncilMemPost = (props) => {
  return (
    <div className="councilPostContainer">
      <div className="imageContainer">
        <img className="councilCardBg" src={councilBG} alt="councilCardBG" />
        <img
          loading="lazy"
          className="councilPostImage"
          src={props.post.imageURL}
          alt="postImage"
        />
      </div>
      <div className="councilPostName">{props.post.name}</div>
      {/* <div
        className="councilPostDescription"
        dangerouslySetInnerHTML={{ __html: props.post.description }}
      /> */}
      <div className="position">{props.post.position}</div>
      <div className="contact">
        <div className="phoneNumber">{props.post.phNumber}</div>
        <div className="insta">{props.post.insta}</div>
        <div className="email">{props.post.email}</div>
      </div>
    </div>
  );
};
