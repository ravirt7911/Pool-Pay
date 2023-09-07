

import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      {/* Add other authentication methods/buttons here */}
    </div>
  );
};

export default Login;
