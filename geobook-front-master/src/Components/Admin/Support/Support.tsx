import { Logout } from "../SideBard/Logout";
import { SideBar } from "../SideBard/SideBar";
import "../../Reg-Login/reg.css"
import { Sup } from "./Sup";

export const Support = () => {
  return (
    <>
        <Logout />
        <div className="flex flex-row mb-20">
        <SideBar />

        
        <Sup/>
       

        </div>
    </>
  );
};
