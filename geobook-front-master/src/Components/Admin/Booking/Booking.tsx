import { BookingTable } from "./BookingTable";
import { Logout } from "../SideBard/Logout";
import { SideBar } from "../SideBard/SideBar";
import "./Booking.css"
export const Booking = () => {
  return (
    <>
      <Logout />
      <div className="flex flex-row mb-20">
        <SideBar />

        <div className="w-10/12 mt-6 mx-auto">
          <BookingTable />
        </div>
      </div>
    </>
  );
};
