import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../../../../config/firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { collection } from "firebase/firestore"
import * as yup from "yup";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export const useCreateForm = (schema, path) => {

  const navigate = useNavigate();


  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yup.object().shape(schema)),
  });

  const collectionRef = collection(database, path);

  const onCreatePost = async (data) => {
    await addDoc(collectionRef, {
      //   title: data.title,
      //   description: data.description,
      ...data, //instead of the above two lines
      username: user?.displayName,
      userId: user?.uid,
      timestamp: serverTimestamp(),
    });

    navigate("/council/login");
  };

  return [user, onCreatePost, register, handleSubmit, errors]
};
