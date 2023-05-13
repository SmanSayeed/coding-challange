/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/lib/firebase/auth";
import { alertTime, siteName } from "@/services/constants/constants";
import allicons from "@/services/constants/icon-constants";
import { useEffect, useState } from "react";
import Github from "../Github/Github";
import Logout from "../Logout/Logout";
import MobileSidebar from "../Sidebar/MobileSidebar";
import {
  createUserAction,
  findUserByEmailAction,
} from "@/app/actions/_userActions";
import Loader from "../Loader/Loader";
import Alert from "../Alert/Alert";
type Props = {};
const Header = (props: Props) => {
  const { authUser, isLoading } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(authUser);
  const [showAlert, setShowAlert] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  async function addUser(data: {}) {
    await createUserAction(data).then((res: any) => {
      console.log("user created res = ", res);
    });
  }

  const checkUser = async (email: string) => {
    // return await  findUserByEmailAction(email)
    let user: any;
    await findUserByEmailAction(email).then((resolved) => {
      console.log("printing resolved...");
      console.log("resolved result = ", resolved);
      user = resolved;
      setUserData(user.user);
    });
  };
  const handleSuccess = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, alertTime);
  };

  useEffect(() => {
    console.log("user", authUser);
    if (!isLoading && authUser) {
      checkUser(authUser.email);
      setIsLoggedIn(true);
      handleSuccess();
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoading, authUser]);

  useEffect(() => {
    try {
      console.log("isUserExist", userData);
      if (!userData) {
        addUser(authUser);
      } else {
        console.log("welcome back");
      }
    } catch (err: any) {
      console.log("errorroooo = ", err);
    }
  }, [userData]);
  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <>
      {showAlert && <Alert message="Login Success!" variant="success" />}
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
