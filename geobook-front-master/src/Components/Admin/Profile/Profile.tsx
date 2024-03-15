import { Logout } from "../SideBard/Logout";
import { SideBar } from "../SideBard/SideBar";
import "../../Reg-Login/reg.css"
import { Transactions } from "./Transactions";


export const Profile = () => {
  return (
    <>
        <Logout />
        <div className="flex flex-row mb-20">
        <SideBar />

        <div className="flex flex-col justify-start wd-50 mx-auto">
        <div className="">

        <form className="">
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              კომპანიის სახელი
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline br-10"
              id="company"
              placeholder="ბილიარდის სახლი"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              ობიექტის მისამართი
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline br-10"
              id="address"
              placeholder="ყაზბეგის 7"
            />
          </div>
            <button type="submit" className="btn btn-primary btn-center">
              დამახსოვრება
            </button>
        </form>
        </div>

        <Transactions/>
        </div>

        </div>
    </>
  );
};
