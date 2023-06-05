import React from "react";

type Props = {};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className="bg-gray-200 text-black"
        >
          {/* <PageLoader /> */}
          <div className="flex flex-col h-screen">
            <div className="h-[100px] w-full bg-blue-800 text-white flex justify-center items-center">
              Admin Layout
            </div>
            <div className="flex flex-row h-[calc(100vh-5rem)]">
              <main className=" w-full  overflow-y-auto">
                {children}
              </main>
            </div>
            <div className="h-[100px] w-full bg-blue-400 text-white flex justify-center items-center">
              Footer
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default AdminLayout;
