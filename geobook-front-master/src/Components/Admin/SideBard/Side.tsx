import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface SideProps {
  path: string;
  icon: React.ReactElement;
  first?: string;
}

export const Side: React.FC<SideProps> = ({ path, icon, first }) => {
  const location = useLocation();

  return (
    <div id="sidebar" className={`sticky mt-4 left-0 text-black w-24 ${first}`}>
      <Link
        to={path}
        className={`${
          location.pathname === path
            ? "bg-bl opacity-60 border-l-4 border-gray-800"
            : "bg-bl"
        } hover:bg-[rgb(132_190_199)] cursor-pointer flex flex-col items-center justify-center h-20 rounded-[2px_15px_15px_2px]`}
      >
        <span>{icon}</span>
      </Link>
    </div>
  );
};