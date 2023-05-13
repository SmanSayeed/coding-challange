/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState } from "react";
// import firebase from '@/firebase/firebase';
import { useAuth } from "@/lib/firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
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
  const { authUser, isLoading, signOut } = useAuth();
  const router = useRouter();
  //   useEffect(() => {
  //    if(!isLoading && authUser){
  // router.push("/");
  //    }
  //   }, [])
  return (
    isLoading || (
      <div>
        <button
          className="bordered-btn"
          onClick={signOut}
        >
          Logout
        </button>
      </div>
    )
  );
};

export default Logout;
