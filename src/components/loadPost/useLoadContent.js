import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { database } from "../../config/firebase";
import { useEffect, useState } from "react";
// import { FeedPost } from "../feedPost/feedPost";

export const useLoadContent = (path) => {
  const postsRef = collection(database, path);
  const [postsList, setPostsList] = useState(null);

  const getPosts = async () => {
    const data = await getDocs(query(postsRef, orderBy("timestamp", "desc")));
    setPostsList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  // const data = await query(postsRef, orderBy("timestamp", "desc"))
  // setPostsList(

  // )

  useEffect(() => {
    getPosts();
  }, []);
  
  return [postsList]
  // return (
  //   <div>
  //     {postsList?.map((post) => {
  //       return <FeedPost post={post} />;
  //     })}
  //     {/* {postsList} */}
  //   </div>
  // );
};
