import * as yup from "yup";
import { useCreateForm } from "../component/useCreateForm";
import { validateFile } from "../component/validateFileSize";

export const CreateFeedForm = ({ division }) => {

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
 } = useCreateForm(schema, division, "feed");

  return (
    <>
      {user ? (
        <form
          onSubmit={handleSubmit(onCreatePost)}
          className="councilCreateForm"
        >
          <input placeholder="Title..." {...register("title")} type="text" />
          <p className="registerError">{errors.title?.message}</p>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              if (validateFile(event, 500)) {
                setDocumentUpload((prev) => [...prev, event.target.files[0]]);
              }
            }}
            required
          />
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
