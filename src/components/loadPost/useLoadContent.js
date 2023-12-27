import {
  getDocs,
  collection,
  query,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import { database } from "../../config/firebase";
import { useEffect, useState } from "react";
// import { FeedPost } from "../feedPost/feedPost";

export const useLoadContent = (path, limitLoad = 3) => {
  const postsRef = collection(database, path);
  const [postsList, setPostsList] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true)

    const data = await getDocs(
      query(postsRef, orderBy("timestamp", "desc"), limit(limitLoad))
    );

    if (data.empty || data.docs.length<limitLoad) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    setLastDoc(data.docs[data.docs.length - 1]);
    setPostsList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );

    setLoading(false)
  };

  // const data = await query(postsRef, orderBy("timestamp", "desc"))
  // setPostsList(

  // )

  const loadMore = async () => {
    setLoading(true)

    const data = await getDocs(
      query(
        postsRef,
        orderBy("timestamp", "desc"),
        limit(limitLoad),
        startAfter(lastDoc)
      )
    );

    if (data.empty || data.docs.length<limitLoad) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    setLastDoc(data.docs[data.docs.length - 1]);

    const newDocuments = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setPostsList((prev) => [...prev, ...newDocuments]);

    setLoading(false)
  };

  useEffect(() => {
    getPosts();
  }, []);

  return [{postsList, hasMore, loadMore, loading}];
  // return (
  //   <div>
  //     {postsList?.map((post) => {
  //       return <FeedPost post={post} />;
  //     })}
  //     {/* {postsList} */}
  //   </div>
  // );
};
