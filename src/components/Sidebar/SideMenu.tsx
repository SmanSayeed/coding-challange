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
        <Link className="menu-item" href="/">Challanges</Link>
        {/* <link className="menu-item" href="/">Resources</link>
        <link className="menu-item" href="/">Articles</link>
        <link className="menu-item" href="/">Link</link> */}
      </div>
    </>
  );
};

export default SideMenu;
