import React, { useState } from "react";
import { auth } from "../config/firebaseconfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

const Registration = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  console.log(auth?.currentUser?.email);

  async function RegisterUser() {
    try {
      setLoading(true);
      const { email, password } = user;
      await createUserWithEmailAndPassword(auth, email, password);
    } catch {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    await signOut(auth);
  }

  return (
    <div>
      <h1>Register</h1>
      <input
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="Enter Email..."
      ></input>
      <input
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="Enter password..."
      ></input>
      <button type="submit" onClick={RegisterUser}>
        {loading ? "loading..." : "Register"}
      </button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Registration;
