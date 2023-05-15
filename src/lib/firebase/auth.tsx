/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  createUserAction,
  findUserByEmailAction,
} from "@/app/actions/_userActions";
import { statusText } from "@/services/constants/constants";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});
export default function useFirebaseAuth(): any {
  const [authUser, setAuthUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState<any>(null);
  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const addUser = async (data: {}) => {
    try {
      const response = await createUserAction(data);
      if (response.status === statusText.ok) {
        console.log("success created user ", response);
      } else {
        console.log("Create Failed----- ", response);
      }
    } catch (error) {
      console.log("addUser Catch  Error = ", error);
    }
  };

  const checkUser = async (email: string) => {
    try {
      const response: any = await findUserByEmailAction(email);
      if (response.status === statusText.ok) {
        console.log("success check ", response.data);
        setUserData(response);
      } else {
        console.log("User Fetch Failed----- ", response);
        setUserData("no user found");
      }
    } catch (error) {
      console.log("get user Catch  Error = ", error);
    }
  };

  const authStateChanged = async (user: any) => {
    setIsLoading(true);
    if (!user) {
      clear();
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
      username: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      providerData: user.providerData[0].providerId,
      reloadUserInfo: user.reloadUserInfo.screenName,
      creationTime: user.reloadUserInfo.lastRefreshAt,
      createdAt: user.reloadUserInfo.createdAt,
    });

    checkUser(user.email);
    setUserData("changed to render");
    setIsLoading(false);
  };
  const signOut = (): any => {
    authSignOut(auth).then(() => {
      clear();
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (authUser) {
      console.log("isUserExist = ", userData);
      if (userData === "no user found") {
        addUser(authUser);
      } else {
        console.log("welcome back");
      }
    }
  }, [userData]);

  return {
    authUser,
    isLoading,
    setAuthUser,
    signOut,
  };
}

export const AuthUserProvider = ({ children }: any) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};

export const useAuth = (): any => useContext(AuthUserContext);
