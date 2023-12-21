import { useState } from "react";
import { CreateFeedForm } from "./FormType/createFeedForm";
import "./createPost.css";
import { CreateGCForm } from "./FormType/createGCForm";

export const CreatePost = () => {
  const divisions = ["cult", "tech", "sports", "mess", "web"];
  const postType = ["feed", "gc", "galary"];
  const [submitDivision, setSubmitDivision] = useState(false);
  const [divisionSelected, setDivision] = useState(null);
  const [postTypeSelected, setPostType] = useState(null);

  const submitFormType = () => {
    const divisionSelect = document.querySelector("#divisionSelect")?.value;
    const postTypeSelect = document.querySelector("#postTypeSelect")?.value;

    if (divisionSelect !== "nullSelect" && postTypeSelect !== "nullSelect") {
      setDivision(divisionSelect);
      setPostType(postTypeSelect);
      setSubmitDivision(true);
    }
  };

  return (
    <div>
      {submitDivision && (
        <span
          onClick={() => {
            setDivision(null);
            setPostType(null);
            setSubmitDivision(false);
          }}
          id="createPostBackButton"
        >
          &#60;-
        </span>
      )}
      <h2 id="createPostHeader">Create Post</h2>
      {!submitDivision ? (
        <>
          <form className="createPostSelectMenu">
            <span>Division:</span>
            <select id="divisionSelect">
              <option value={"nullSelect"}>Select Division</option>
              {divisions.map((division, key) => {
                return (
                  <option value={division} key={key}>
                    {division}
                  </option>
                );
              })}
            </select>
            <br></br>
            <span>Post Type:</span>
            <select id="postTypeSelect">
              <option value={"nullSelect"}>Select Post Type</option>
              {postType.map((type, key) => {
                return (
                  <option value={type} key={key}>
                    {type}
                  </option>
                );
              })}
            </select>
            <button onClick={submitFormType}>Submit</button>
          </form>
        </>
      ) : (
        <>
          {postTypeSelected === "feed" && (
            <CreateFeedForm division={divisionSelected} />
          )}
          {postTypeSelected === "gc" && (
            <CreateGCForm division={divisionSelected} />
          )}
        </>
      )}
    </div>
  );
};
