import { database } from "../../../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export const useDeletePost = () => {
  const deleteThisPost = async (post, path) => {
    const confirmation = window.prompt("Type 'CONFIRM' to delete");
    if (confirmation !== "CONFIRM") {
      window.alert("You must write 'CONFRIM' to continue");
      return;
    }
    
    const docRef = doc(database, path)

    try {
        await deleteDoc(docRef)
        window.alert("Post Deleted Successfully!")
    } catch (error) {
        window.alert("Error Occured! You must be a council member with permissions to write and delete post!")
    }
  };

  return {deleteThisPost}
};
