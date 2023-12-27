import { useState } from "react";
import "./galaryPost.css";

export const GalaryPost = (props) => {
  const [openPost, setOpenPost] = useState(false);

  const ImageGalary = () => {
    const filteredImageURLs = Object.entries(props.post)
      .filter(([key]) => key.startsWith("imageURL"))
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});

    return (
      <>
        {Object.keys(filteredImageURLs).map((key, index) => (
          <img
            loading="lazy"
            className="galaryPostImage postImage"
            key={index}
            src={filteredImageURLs[key]}
            alt={`Image ${index + 1}`}
          />
        ))}
      </>
    );
  };

  return (
    <div className="galaryPostContainer postContainer">
      <div className="galaryPostTitle postTitle">{props.post.title}</div>
      {/* <img
        className="galaryPostImage postImage"
        src={props.post.imageURL}
        alt="postImage"
      /> */}
      <div className="galaryScroller">
        <ImageGalary />
      </div>

      <div
        className="contentToHide"
        style={{ maxHeight: openPost ? "fit-content" : "105px" }}
      >
        <div
          className="galaryPostDescription postDescription"
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
