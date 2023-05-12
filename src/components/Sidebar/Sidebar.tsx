/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState } from "react";
import SideMenu from "./SideMenu";

type Props = {};

const Sidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-red-500 w-2/12 overflow-y-auto py-4  border-r border-1 border-green-500 bg-dark hidden lg:block">
        <SideMenu />
      </div>
    </>
  );
};

export default Sidebar;
