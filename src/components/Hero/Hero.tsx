/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/firebase/auth";
import { useEffect, useState } from "react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

type Props = {};

const Hero = (props: Props) => {
  const { authUser, isLoading } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(authUser);
    if (!isLoading && authUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <div className="mt-5 w-full text-white">
        <div className="container flex justify-center items-center text-2xl">
          <div className="bg-black text-green-500 p-4 rounded-lg mt-10 flex justify-center align-center flex-col">
          
            <div className="">
              <p className="text-md underline text-yellow-200 align-center my-5">
                What is coming soon in this website:
              </p>
              <ul>
                <li>
                  <span className="text-md">User login:</span>{" "}
                  <span className="text-green-300">Done</span>
                </li>
                <li>
                  <span className="text-md">UI UX improvement :</span>{" "}
                  <span className="text-blue-300">In progress</span>
                </li>

                <li>
                  <span className="text-md">User Accept Challange :</span>{" "}
                  <span className="text-blue-300">In progress</span>
                </li>
                <li>
                  <span className="text-md">
                    Submit project github and live link :
                  </span>{" "}
                  <span className="text-orange-600">Coming soon</span>
                </li>
                <li>
                  <span className="text-md">Challange timeline :</span>{" "}
                  <span className="text-orange-600">Coming soon</span>
                </li>
                <li>
                  <span className="text-md">Leader board :</span>{" "}
                  <span className="text-orange-600">Coming soon</span>
                </li>
                <li>
                  <span className="text-md">Project rating :</span>{" "}
                  <span className="text-orange-600">Coming soon</span>
                </li>
                <li>
                  <span className="text-md">Source code checker :</span>{" "}
                  <span className="text-orange-600">Coming soon</span>
                </li>
                <li>
                  <span className="text-md">Commenting :</span>{" "}
                  <span className="text-red-800">Under planning</span>
                </li>
                <li>
                  <span className="text-md">Badge :</span>{" "}
                  <span className="text-red-800">Under planning</span>
                </li>
                <li>
                  <span className="text-md">Project status sharing :</span>{" "}
                  <span className="text-red-800">Under planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
