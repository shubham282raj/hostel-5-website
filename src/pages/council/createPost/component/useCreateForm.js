import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../../../../config/firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { collection } from "firebase/firestore"
import * as yup from "yup";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {storage} from "../../../../config/firebase"
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import { useState } from "react";
import {v4} from "uuid"


export const useCreateForm = (schema, path) => {

  const [loading, setLoading] = useState(false);

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

  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = async () => {
    if (imageUpload == null) {
      return null;
    }
    const imageRef = await ref(storage, `cult/feed/${imageUpload.name + v4()}`);
    
    await uploadBytes(imageRef, imageUpload)
    
    return await getDownloadURL(imageRef).then((url)=>{
      return url;
    })
  };

  const onCreatePost = async (data) => {

    setLoading(true)

    const imageURL = await uploadImage();
    
    if(imageURL == null){
      return;
    } 

    await addDoc(collectionRef, {
      //   title: data.title,
      //   description: data.description,
      ...data, //instead of the above two lines
      imageURL: imageURL,
      username: user?.displayName,
      userId: user?.uid,
      timestamp: serverTimestamp(),
    });

    setLoading(false)

    navigate("/council/login");
  };

  return [user, setImageUpload, onCreatePost, register, handleSubmit, errors, loading]
};
