import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <div className="w-min ml-auto mt-8">
    <Link
      className="text-2xl flex flex-row justify-end items-center font-bold mr-8"
      to="/"
    >
      გასვლა <GrLogout className="ml-2 -mt-1 w-[40px] h-[40px]" />
    </Link>
    </div>
  );
};
