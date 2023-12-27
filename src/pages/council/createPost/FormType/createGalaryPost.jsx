import * as yup from "yup";
import { useCreateForm } from "../component/useCreateForm";
import { useState } from "react";

export const CreateGalaryForm = ({ division }) => {
  const schema = {
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must give a description"),
  };

  const {
    user,
    setDocumentUpload,
    onCreatePost,
    register,
    handleSubmit,
    errors,
    loading,
  } = useCreateForm(schema, division, "galary");

  const [imageCount, setImageCount] = useState([1, 1]);

  return (
    <>
      {user ? (
        <form
          onSubmit={handleSubmit(onCreatePost)}
          className="councilCreateForm"
        >
          <input placeholder="Title..." {...register("title")} type="text" />
          <p className="registerError">{errors.title?.message}</p>
          {imageCount.map((value, key) => {
            return<input
              key={key}
              type="file"
              accept="image/*"
              onChange={(event) => {
                setDocumentUpload((prev)=>[...prev,event.target.files[0]]);
              }}
            />;
          })}
          {<div className="addMore" onClick={()=>setImageCount(prev=>[...prev,1])}>Add More</div>}
          <textarea placeholder="Description..." {...register("description")} />
          <p className="registerError">{errors.description?.message}</p>
          <input type="submit" value={loading ? "Uploading" : "Submit"} />
        </form>
      ) : (
        <div id="notLoggedIn">
          You must be logged in as a Council Member to use this facility
        </div>
      )}
    </>
  );
};
