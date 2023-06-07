import React, { useEffect, useState } from "react";
import { auth, provider } from "../config/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";

export function SignUpForm({ callback }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState(true);
        console.log("user loogined");
      } else {
        setAuthState(false);
        console.log("Plese logg-In");
      }
    });
  }, []);

  async function googleSignUp() {
    try {
      const result = await signInWithPopup(auth,new GoogleAuthProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert(user+" google loggeg-in");
      // IdP data available using getAdditionalUserInfo(result)
    } catch (error) {
      alert("errot in google "+error.code);
       // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    }
  }

  function logOut() {
    signOut(auth)
      .then(() => {
        alert("user logged out");
      })
      .catch((error) => {
        alert("problem in logout " + error.code);
      });
  }

  async function signUUP() {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      try {
        const reslove = await updateProfile(response.user, {
          displayName: name,
        });
        callback(false);
        alert("signup and profile done");
      } catch (error) {
        alert(error.code + " failed in profile block");
      }
    } catch (error) {
      alert(error.code + "failed ");
    }
  }
  async function signInn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert(" successfully logged-In " + userCredential.user.displayName);
      callback(false); //for closing the Reg-form
    } catch (error) {
      alert(error.mesage);
    }
  }

  return (
    <div className="container1 modal">
      <div className="form-box animate ">
        <span
          onClick={() => callback(false)}
          className="close"
          title="Close Modal"
        >
          <i className="fa-solid fa-xmark fa-bounce"></i>
        </span>
        <h1>{authState === true ? "already logged-In" : "Please LogIn"}</h1>
        <form>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                value={email}
                required
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                value={password}
              />
            </div>
            <div className="input-field">
              <button onClick={googleSignUp} >Google Login</button>
            </div>
            <p>
              Lost password <a href="">Click Her !</a>
            </p>
          </div>
          <div className="form-btn-feild">
            <button onClick={signUUP} type="button">
              Sign up
            </button>
            <button onClick={signInn} type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
