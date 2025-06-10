import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
  const navigate = useNavigate();

  const handleLogut = async () => {
    await logoutUser();
    navigate("/sign-in");
  };

  return (
    <div className="w-screen px-20 h-screen bg-[#ececec] flex flex-col items-center py-10 space-y-6">
      <div className="flex flex-col justify-center items-center  w-full h-72 space-y-6 bg-white rounded-xl">
        <img src="/assets/icons/user.png" alt="user" className="size-10" />
        <h1 className="p-28-bold">Welcome Back!</h1>
        <h1 className="text-primary-100 text-[14px] md:text-[18px] leading-[14px] md:leading-[16px] font-normal">
          Admin
        </h1>
      </div>
      <div className="flex flex-col space-y-6  md:space-y-0 md:flex-row justify-between w-full space-x-10">
        {/* dashboard */}
        <div className="flex justify-center items-center w-full p-4 bg-white rounded-xl">
          <div className=" space-y-4 w-full">
            <div className="size-12 flex justify-center items-center rounded-xl bg-[#8cccef]">
              <img
                src="/assets/icons/dashboard.png"
                alt="dashboard"
                className="size-10"
              />
            </div>
            <h1 className="p-18-semibold">Go to Dashboard</h1>
            <p className="p-14-regular">
              Access your admin dashboard to manage system settings and view
              analytics.
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-white p-20-bold rounded-md p-1 bg-primary-100 w-full cursor-pointer"
            >
              Open Dashboard
            </button>
          </div>
          <div className=" h-40 bg-amber-300"></div>
        </div>
        {/* logout */}
        <div className="flex justify-center items-center w-full p-4 bg-white rounded-xl">
          <div className=" space-y-4 w-full ">
            <div className="size-12 flex justify-center items-center rounded-xl bg-[#eec9ce]">
              <img
                src="/assets/icons/logout.svg"
                alt="dashboard"
                className="size-6"
              />
            </div>
            <h1 className="p-18-semibold">Logout</h1>
            <p className="p-14-regular ">
              Securely end your current session and return to the login page.
            </p>
            <button
              onClick={handleLogut}
              className="text-white p-20-bold rounded-md p-1 bg-red-500 w-full cursor-pointer"
            >
              Logout Now
            </button>
          </div>
          <div className=" h-40 bg-amber-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
