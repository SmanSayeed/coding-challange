/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState } from "react";
// import firebase from '@/firebase/firebase';
import { useAuth } from "@/lib/firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import Image from "next/image";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //   useEffect(() => {
  //    if(!isLoading && authUser){
  // router.push("/");
  //    }
  //   }, [])
  return (
    isLoading || (
      <div className="flex gap-2 justify-center items-center">
        <div className="relative">
          <Image
            src={authUser?.photoURL}
            height={40}
            width={40}
            alt="user image"
            className="rounded-full shadow-sm cursor-pointer"
            onClick={handleToggleDropdown}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48  rounded-md shadow-lg z-50 bg-black p-2  border-2 border-green-500 color-green-500 min-h-[20vh] flex flex-col justify-between items-center">
              <div>
                <p>Hi, {authUser?.username}</p>
              </div>

              <button
                onClick={signOut}
                className="block w-full text-left px-4 py-2 text-sm text-red-500  border-2 border-red-500 font-bold rounded-sm hover:bg-red-200 text-center"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        {/*        
        <button className="bordered-btn" onClick={signOut}>
          Logout
        </button> */}
      </div>
    )
  );
};

export default Logout;
