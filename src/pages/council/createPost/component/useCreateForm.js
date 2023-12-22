import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../../../../config/firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { collection } from "firebase/firestore";
import * as yup from "yup";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";
// import { useSpreadSheet } from "./useSpreadSheet";

export const useCreateForm = (schema, division, type) => {
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

  const collectionRef = collection(database, `${division}/${type}/${type}`);

  const [documentUpload, setDocumentUpload] = useState(null);

  // const [handleExcelFile] = useSpreadSheet();

  const uploaddocument = async () => {
    if (documentUpload == null) {
      return null;
    }
    const documentRef = await ref(
      storage,
      `${division}/${type}/${documentUpload.name + v4()}`
    );

    await uploadBytes(documentRef, documentUpload);

    return await getDownloadURL(documentRef).then((url) => {
      return url;
    });
  };

  const onCreatePost = async (data) => {
    setLoading(true);

    const documentURL = await uploaddocument();

    console.log(documentURL);

    if (documentURL == null) {
      return;
    }

    await addDoc(collectionRef, {
      //   title: data.title,
      //   description: data.description,
      ...data, //instead of the above two lines
      imageURL: documentURL,
      username: user?.displayName,
      userId: user?.uid,
      timestamp: serverTimestamp(),
    });

    setLoading(false);

    navigate("/council/login");
  };

  const onCreateMessMenu = async (data) => {
    setLoading(true);

    console.log(documentUpload)
    
    await addDoc(collectionRef, {
      //   title: data.title,
      //   description: data.description,
      ...data, //instead of the above two lines
      ...documentUpload,
      username: user?.displayName,
      userId: user?.uid,
      timestamp: serverTimestamp(),
    });

    setLoading(false);

    navigate("/council/login");
  };

  return {
    user,
    setDocumentUpload,
    onCreatePost,
    register,
    handleSubmit,
    errors,
    loading,
    onCreateMessMenu
  };
};
