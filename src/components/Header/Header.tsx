/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/lib/firebase/auth";
import { alertTime, siteName } from "@/services/constants/constants";
import allicons from "@/services/constants/icon-constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import Alert from "../Alert/Alert";
import Github from "../Github/Github";
import Loader from "../Loader/Loader";
import Logout from "../Logout/Logout";
import MobileSidebar from "../Sidebar/MobileSidebar";
type Props = {};
const Header = (props: Props) => {
  const { authUser, isLoading } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [showAlert, setShowAlert] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const handleSuccess = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, alertTime);
  };

  useEffect(() => {
    console.log("authUser = ", authUser);
    if (!isLoading && authUser) {
      setIsLoggedIn(true);
      handleSuccess();
    } else {
      setIsLoggedIn(false);
    }
  }, [authUser]);

  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <>
      {showAlert && <Alert message="Login Success!" variant="success" />}
      <header className="w-full text-white bg-dark border-b border-1 border-green-500  h-20 shrink-0 flex justify-between items-center py-4 px-5 ">
        <Link href="/" className=" flex flex-col justify-start items-start text-xl font-bold text-green-500">
          {siteName}
          <br />
          <span className="text-[14px]">V - 0.0 (alpha)</span>
        </Link>
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
