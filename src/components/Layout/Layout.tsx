import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

type Props = {};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-row h-[calc(100vh-5rem)]">
          <Sidebar />
          <main className=" w-full lg:w-10/12  overflow-y-auto">
          {children}
          </main>
         
          {/* <Footer /> */}
          </div>
       
         
          </div>
         
        </body>
      </html>
    </>
  );
};

export default Layout;
