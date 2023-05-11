"use client";
import React, { useEffect, useState } from "react";
// import firebase from '@/firebase/firebase';
import { auth, db } from "@/firebase/firebase";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
const date = new Date();
const provider = new GithubAuthProvider();

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [uid, setUid] = useState(null);
  const { authUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && authUser) {
      router.push("/");  
    }
  }, [isLoading,authUser]);

  const handleSignIn = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  };
  return isLoading || (!authUser && isLoading) ? (
    <>Loading</>
  ) : (
    <div>
      {
        <button
          className="text-lg my-10 bg-white p-5  rounded-lg w-full"
          onClick={() => handleSignIn()}
        >
          Join with github
        </button>
      }
    </div>
  );
};

export default Login;
