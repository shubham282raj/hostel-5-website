import * as yup from "yup";
import { useCreateForm } from "../component/useCreateForm";

export const CreateFeedForm = ({division}) => {

  const schema = {
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must give a description"),
  };

  const [user, onCreatePost, register, handleSubmit, errors] = useCreateForm(
    schema,
    `${division}/feed/feed`
  );

  return (
    <>
      {user ? (
        <form
          onSubmit={handleSubmit(onCreatePost)}
          className="councilCreateForm"
        >
          <input placeholder="Title..." {...register("title")} type="text" />
          <p className="registerError">{errors.title?.message}</p>
          <textarea placeholder="Description..." {...register("description")} />
          <p className="registerError">{errors.description?.message}</p>
          <input type="submit" />
        </form>
      ) : (
        <div id="notLoggedIn">
          You must be logged in as a Council Member to use this facility
        </div>
      )}
    </>
  );
};
