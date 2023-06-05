import { adminLogin } from "@/app/actions/_adminLoginAction";

type Props = {};
const inputStyle = "border border-black rounded-md w-full h-[3rem] px-2 ";

export default function AdminLogin({}: Props) {
  const loginAction = async (formData:any) => {
    "use server";
 
    await adminLogin(formData)
  };
  return (
    <div className="flex justify-center items-center">
      <form
        className="sm:w-[90%] md:w-[50%]  vh-80 bg-red-300 flex flex-col gap-5  my-5 p-3 rounded-md"
        action={loginAction}
      >
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={inputStyle}
            placeholder="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={inputStyle}
            placeholder="password"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-800"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
