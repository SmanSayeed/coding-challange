/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
// import firebase from '@/firebase/firebase';
import { auth } from "@/firebase/firebase";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useAuth } from "@/firebase/auth";
import { useRouter } from 'next/navigation';
const provider = new GithubAuthProvider();

// const uiConfig = {
//     signInSuccessUrl :"/",
//     signInOption:[firebase.auth.GithubAuthProvider.PROVIDER_ID],

// }
type Props = {};

const Logout = (props: Props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [uid, setUid] = useState(null);
  const { authUser, isLoading,  signOut } = useAuth();
const router = useRouter();
  useEffect(() => {
   if(!isLoading && authUser){
router.push("/");
   }
  }, [])
    

  const handleLogout = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  };
  return isLoading ||  (
    <div>
      <button
        className="text-lg my-10 bg-white p-5  rounded-lg"
        onClick={()=>signOut()}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
