/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <>
      <div className="side-menu">
      <div className="menu-item">
      <Link href="/">
       Home
      </Link>
        
      </div>
        <div className="menu-item">Challanges</div>
        <div className="menu-item">Resources</div>
        <div className="menu-item">Articles</div>
        <div className="menu-item">Link</div>
      </div>
    </>
  );
};

export default SideMenu;
