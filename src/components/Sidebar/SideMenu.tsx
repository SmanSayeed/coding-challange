/* eslint-disable react-hooks/exhaustive-deps */
"use client";

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <>
      <div className="side-menu">
        <div className="menu-item">Challanges</div>
        <div className="menu-item">Resources</div>
        <div className="menu-item">Articles</div>
        <div className="menu-item">Link</div>
      </div>
    </>
  );
};

export default SideMenu;
