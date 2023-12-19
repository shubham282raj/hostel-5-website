import { auth, provider } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const LoginCouncil = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
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
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
      ) : (
        <div className="councilUserHeader">
          <p>{user?.displayName}</p>
          <img
            src={user?.photoURL || ""}
            style={{ width: "100px", aspectRatio: "1" }}
            alt="user_profile_pic"
          ></img>
          <button onClick={logOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};
