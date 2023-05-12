/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { siteName } from "@/services/constants/constants";
import SideMenu from "./SideMenu";

type Props = {
  isOpen: any;
  setIsOpen: any;
  toggleDrawer: any;
};

const MobileSidebar = ({ isOpen, setIsOpen, toggleDrawer }: Props) => {
  return (
    <>
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Sidebar drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar content goes here */}
        <div className="py-3 px-2 flex justify-between items-center text-center text-2xl text-500 text-green-500 border-b border-1 border-green-500 h-20">
          {siteName}
          <button
            className=" bg-gray-900 rounded-md z-50"
            onClick={toggleDrawer}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="mt-10">
          <SideMenu />
        </div>
      </div>

      {/* Toggle button */}
      {/* <button
        className="fixed top-4 left-4 p-2 bg-gray-900 text-white rounded-md z-50"
        onClick={toggleDrawer}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          )}
        </svg>
      </button> */}
    </>
  );
};

export default MobileSidebar;
