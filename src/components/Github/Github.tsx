"use client";
import allicons from "@/services/constants/icon-constants";
/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react";
// import firebase from '@/firebase/firebase';
import { useAuth } from "@/firebase/auth";
import { auth } from "@/firebase/firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
const date = new Date();
const provider = new GithubAuthProvider();

type Props = {};

const Github = (props: Props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [uid, setUid] = useState(null);
  const { authUser, isLoading } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoading && authUser) {
  //     router.push("/");
  //   }
  // }, [isLoading,authUser]);

  const handleSignIn = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <div
      className="bordered-btn"
      onClick={() => handleSignIn()}
    >
      <p className="hidden lg:block neon-green-text ">Login with github</p>
      <div className="mobile-nav-icon text-2xl text-green-500 p-2 rounded-lg neon-green-text ">
        {allicons.github}
      </div>
    </div>
  );
};

export default Github;
