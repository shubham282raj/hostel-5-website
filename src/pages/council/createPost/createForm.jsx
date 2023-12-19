import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./createForm.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, database } from "../../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must give a description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(database, "cult");

  const onCreatePost = async (data) => {
    console.log(data);

    await addDoc(postsRef, {
      //   title: data.title,
      //   description: data.description,
      ...data, //instead of the above two lines
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/council/login");
  };

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
        <div id="notLoggedIn">You must be logged in as a Council Member to use this facility</div>
      )}
    </>
  );
};
