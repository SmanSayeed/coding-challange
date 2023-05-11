type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className=" w-full text-green-500 bg-black text-white">
        <div className="container h-[50px] flex justify-center items-center">
          <div className="">
            <a
              href="https://www.facebook.com/groups/1245872166031036/?ref=share_group_link"
              target="_blank"
              className="underline"
            >
              Join Bd Web Devs
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
