/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/firebase/auth";
import { siteName } from "@/services/constants/constants";
import allicons from "@/services/constants/icon-constants";
import { useEffect, useState } from "react";
import Github from "../Github/Github";
import Logout from "../Logout/Logout";
import MobileSidebar from "../Sidebar/MobileSidebar";

type Props = {};

const Header = (props: Props) => {
  const { authUser, isLoading } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(authUser);
    if (!isLoading && authUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [authUser]);

  return (
    <>
      <header className="overflow-hidden w-full text-white bg-dark border-b border-1 border-green-500  h-20 shrink-0 flex justify-between items-center py-4 px-5 ">
        <div className=" flex justify-start items-center text-xl font-bold text-green-500">
          {siteName}
        </div>
        <div className="flex gap-2 justify-center items-center">
          {isLoggedIn ? <Logout /> : <Github />}
          <div
            className="mobile-nav-icon text-2xl text-green-500 p-2 rounded-lg lg:hidden"
            onClick={toggleDrawer}
          >
            {allicons.navIcon}
          </div>
        </div>
      </header>
      <div className="block lg:hidden xl:hidden 2xl:hidden">
        <MobileSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleDrawer={toggleDrawer}
        />
      </div>
    </>
  );
};

export default Header;
