import { useRef, useState } from "react";
import "./galaryPost.css";

export const GalaryPost = (props) => {
  const [openPost, setOpenPost] = useState(false);

  const [imageCount, setImageCount] = useState(1);

  const scrollerRef = useRef(null);

  const ImageGalary = () => {
    const filteredImageURLs = Object.entries(props.post)
      .filter(([key]) => key.startsWith("imageURL"))
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    
    setImageCount(Object.keys(filteredImageURLs).length);

    return (
      <>
        {Object.keys(filteredImageURLs).map((key, index) => (
          <div className="imageContainer galaryImageContainer">
            <img
              loading="lazy"
              className="galaryPostImage postImage"
              key={index}
              src={filteredImageURLs[key]}
              alt={`ImageFile ${index + 1}`}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="galaryPostContainer postContainer">
      <div className="galaryScrollerContainer">
        <div className="galaryScroller" ref={scrollerRef}>
          <ImageGalary />
        </div>
        <div
          className="leftBtn scrollBtn"
          onClick={() => {
            
              scrollerRef.current?.scrollTo(scrollerRef.current?.scrollLeft - scrollerRef.current?.scrollWidth / imageCount,0)
          }}
        >
          &lt;
        </div>
        <div
          className="rightBtn scrollBtn"
          onClick={() => {
            scrollerRef.current?.scrollTo(scrollerRef.current?.scrollLeft + scrollerRef.current?.scrollWidth / imageCount,0)
          }}
        >
          &gt;
        </div>
      </div>

      <div className="text">
        <div
          className="contentToHide"
          style={{
            maxHeight: openPost ? "fit-content" : "105px",
            minHeight: "105px",
          }}
        >
          <div className="galaryPostTitle postTitle">{props.post.title}</div>

          <div
            className="galaryPostDescription postDescription"
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
