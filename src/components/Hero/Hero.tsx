/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/lib/firebase/auth";
import { useEffect, useState } from "react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

type Props = {};

const Hero = (props: Props) => {
 

  return (
    <>
      <div className="w-[100%] text-white bg-black overflow-hidden">
          <div className=" text-green-500 p-4 rounded-lg flex justify-center align-center flex-col">
              <p className="text-2xl  text-yellow-200 align-center ">
                Are you ready for accepting coding challanges?
              </p>
        </div>
        <div className=" p-4 ">
          <ul>
            <li>First login with your github account</li>
            <li>Accept a challenge with your skill level</li>
            <li>Solve the project problem and submit your project live link and github public link</li>
            <li>Check leader board</li>
            <li>Share your submission to get review</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
