import React, { useEffect, useState } from "react";
import "./editPost.css";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, database } from "../../../config/firebase";
import { validateFile } from "../createPost/component/validateFileSize";
import { useCreateForm } from "../createPost/component/useCreateForm";
import { useAuthState } from "react-firebase-hooks/auth";

const EditPost = () => {
  const { id, division, postType } = useParams();

  const docRef = doc(database, `${division}/${postType}/${postType}`, id);
  const [data, setData] = useState({});

  const getPost = async () => {
    const docSnap = await getDoc(docRef);
    setData(docSnap.data());
  };

  const { uploaddocument } = useCreateForm({}, division, postType);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="editPostContainer">
      {Object.keys(data).map((key, value) => {
        if (key === "timestamp" || key === "username" || key === "userId" || key === "updatedTimestamp") {
          return <></>;
        }

        if (key.startsWith("imageURL")) {
          return (
            <div className="imageType subContainer">
              <p>{key}</p>
              <img id={`image${value}`} src={data[key]} alt={`imageFile${value}`} />
              <input
                type="file"
                accept="image/*"
                onChange={async (event) => {
                  if (validateFile(event, 500)) {
                    const url = await uploaddocument(event.target.files[0]);
                    document.getElementById(`image${value}`).src = url;
                    setData((prev) => ({ ...prev, [key]: url }));
                  }
                }}
              />
            </div>
          );
        }

        return (
          <div key={key} className="textType subContainer">
            <p className="key">{key}</p>
            <textarea
              rows="10"
              className="value"
              value={data[key]}
              onChange={(e) =>
                setData((prev) => ({ ...prev, [key]: e.target.value }))
              }
            ></textarea>
          </div>
        );
      })}
      <div
        className="btn"
        onClick={async () => {
          setDoc(docRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
            updatedTimestamp: serverTimestamp(),
          });
          navigate("/council/login")
        }}
      >
        Submit Changes
      </div>
    </div>
  );
};

export default EditPost;
