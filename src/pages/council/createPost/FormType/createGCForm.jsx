import * as yup from "yup";
import { useCreateForm } from "../component/useCreateForm";

export const CreateGCForm = ({ division }) => {
  const schema = {
    title: yup.string().required("You must add a title"),
    score: yup.string().max(10, "Maximum 10 Characters Allowed"),
    teamDetails: yup.string().required("Please enter team details points"),
    description: yup.string().required("You must give a description"),
  };

  const [
    user,
    setImageUpload,
    onCreatePost,
    register,
    handleSubmit,
    errors,
    loading,
  ] = useCreateForm(schema, division, "gc");

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
            placeholder="GC Points..."
            {...register("score")}
            type="text"
          />
          <p className="registerError">{errors.score?.message}</p>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <textarea
            placeholder="Team Details..."
            {...register("teamDetails")}
          />
          <p className="registerError">{errors.teamDetails?.message}</p>
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
