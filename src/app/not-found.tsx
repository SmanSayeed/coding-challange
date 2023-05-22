type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <div className="    text-green-500 rounded-md my-5 text-lg font-extrabold flex justify-center items-center flex-col gap-[30px] h-[70vh] w-full ">
        <p className="text-[60px]">404</p>
        <p className="text-[35px]">Page not found</p>
      </div>
    </>
  );
};

export default NotFound;
