"use client";
import { auth } from "@/lib/firebase/firebase";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
// import firebase from '@/firebase/firebase';
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

const date = new Date();
const provider = new GithubAuthProvider();
export const handleSignIn:any = async () => {
    const user = await signInWithPopup(auth, provider);
    return user;
  }

  export default handleSignIn