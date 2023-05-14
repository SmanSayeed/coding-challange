/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebase";
import { createUserAction, findUserByEmailAction } from "@/app/actions/_userActions";
const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});
import { resetUser,addUserRedux } from "@/redux/slices/userSlice";
// import { resetUser, } from "@/redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Providers } from "@/redux/provider";

export default function useFirebaseAuth():any {
  const [userData, setUserData] = useState<any>(null);
  const [authUser, setAuthUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const userReducerData = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();


  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };


  /* checking if user is added in mongodb or not */
  const checkUser = async (email: string) => {
    // return await  findUserByEmailAction(email)
    let user: any;
    // await findUserByEmailAction(email).then((resolved) => {
    //   console.log("printing resolved...");
    //   console.log("resolved result = ", resolved);
    //   user = resolved.user;
    //   setUserData(user);
    // });
    const d = await findUserByEmailAction(email);
    const res = ((resolved:any)=>{
      console.log("printing resolved...");
      console.log("resolved result = ", resolved);
      user = resolved.user;
      setUserData(user);
    })
    return res;
  };

  /* add user if not exist */
  async function addUser(data: {}) {
    await createUserAction(data).then((res: any) => {
      console.log("user created res = ", res);
      dispatch(addUserRedux(res))
    });
  }

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
      photoURL:user.photoURL,
      phoneNumber:user.phoneNumber,
      providerData:user.providerData[0].providerId,
      reloadUserInfo:user.reloadUserInfo.screenName,
      creationTime:user.reloadUserInfo.lastRefreshAt,
      createdAt:user.reloadUserInfo.createdAt,
    });
      /*check users existance */
    setIsLoading(false);
  };
  const signOut = ():any => {
    authSignOut(auth).then(() => {
      clear();
    });
  };


  useEffect(() => {
    if(authUser?.email!=null){
     checkUser(authUser)
      if(userData){
        console.log("User data =================== ",userData)
        dispatch(addUserRedux(userData))
      }else{
        addUser(authUser)
      }    
    } 
  }, [authUser])
  


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  },[]);
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
   <Providers>
     <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
   </Providers>
  );
};

export const useAuth = ():any => useContext(AuthUserContext);
