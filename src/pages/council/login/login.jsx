import { auth, provider } from "../../../config/firebase";
import { signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import { Link } from "react-router-dom";

const LoginCouncil = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithRedirect(auth, provider);
    console.log(result);
    console.log(auth);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const [user] = useAuthState(auth); //this fixed loading profile when you login with something new

  return (
    <div>
      {!user ? (
        <div className="signInHeader">
          <p>Sign In with Google to Continue</p>
          <button onClick={signInWithGoogle} className="loginPageButton">
            Sign In With Google
          </button>
        </div>
      ) : (
        <>
          <div className="councilUserHeader">
            <span id="userDisplayName">Welcome {user?.displayName}</span>
            <img
              src={user?.photoURL || ""}
              alt="user_profile_pic"
              id="userDisplayPhoto"
            ></img>
            <button onClick={logOut} className="loginPageButton">
              Log Out
            </button>
          </div>
          <div className="councilCRUD">
            <Link to="/council/createPost">Create Post</Link><br></br>
            <Link to="/council/deletePost">Edit/Delete Post</Link><br></br>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginCouncil;