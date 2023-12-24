import React, { useState, useEffect } from "react";
import { CreateFeedForm } from "./FormType/createFeedForm";
import "./createPost.css";
import { CreateGCForm } from "./FormType/createGCForm";
import { CreateMessMenu } from "./FormType/createMessMenu";

export const CreatePost = () => {
  const divisionObject = {
    cult: ["home", "feed", "gc", "galary"],
    tech: ["home", "feed", "gc", "galary"],
    sports: ["home", "feed", "gc", "galary"],
    mess: ["home", "messMenu"],
    council: ["home", "coordinators", "secretary"],
  };

  const [division, setDivision] = useState("");
  const [postType, setPostType] = useState("");

  useEffect(() => {
    console.log(division, postType)
  }, [division]);

  return (
    <div>
      {/* {divisionSubmit && <span>&#60;-</span>} */}
      <h2 id="createPostHeader">Create Post</h2>
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
        {postType === "feed" && <CreateFeedForm division={division} />}
        {postType === "gc" && <CreateGCForm division={division} />}
        {postType === "messMenu" && <CreateMessMenu division={division} />}
      </>
    </div>
  );
};
