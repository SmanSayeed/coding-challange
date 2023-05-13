"use client";
import allicons from "@/services/constants/icon-constants";
/* eslint-disable react-hooks/exhaustive-deps */
import useMongoDB from "@/services/hooks/useMongoDb";
import { useState } from "react";
// import firebase from '@/firebase/firebase';
import { useAuth } from "@/lib/firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import handleSignIn from "@/services/functions/handleSignIn";
import { createUserAction } from "@/app/actions/_userActions";
const date = new Date();
const provider = new GithubAuthProvider();

type Props = {};

const Github = (props: Props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [uid, setUid] = useState(null);
  const { authUser, isLoading } = useAuth();
  const router = useRouter();

  // async function addUser(data:any){
    
  // }

  // useEffect(() => {
  //   if (!isLoading && authUser) {
  //     router.push("/");
  //   }
  // }, [isLoading,authUser]);

  // const handleSignIn = async () => {
  //   const user = await signInWithPopup(auth, provider);
  //   console.log(user);
  // };

  const signIn = async () => {
    const user = await handleSignIn();
    console.log("signin = ",user);
  }

  return (
    <div
      className="bordered-btn"
      onClick={()=>signIn()}
    >
      <p className="hidden lg:block neon-green-text ">Login with github</p>
      <div className="mobile-nav-icon text-2xl text-green-500 p-2 rounded-lg neon-green-text ">
        {allicons.github}
      </div>
    </div>
  );
};

export default Github;
