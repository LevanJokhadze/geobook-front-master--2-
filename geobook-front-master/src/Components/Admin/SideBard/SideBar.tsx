import { CgProfile } from "react-icons/cg";
import { Side } from "./Side";
import { FaHome } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";


export const SideBar = () => {
  return (
    <>
    <div>
      

      <Side path="/admin/profile" icon={<CgProfile className="w-[60px] h-[60px]" />} first="!-mt-3"/>
      <Side path="/admin/home" icon={<FaHome className="w-[60px] h-[60px]" />} />
      <Side path="/admin/calendar" icon={<MdEditCalendar className="w-[60px] h-[60px]" />} />
      <Side path="/admin/analytics" icon={<SiGoogleanalytics className="w-[60px] h-[60px]" />} />
      <Side path="/admin/support" icon={<MdSupportAgent  className="w-[60px] h-[60px]" />} />
      </div>
    </>
  );
};