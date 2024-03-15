import { useState } from "react";

export const AnaliticHead = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("ბოლო 30 დღე");

  const handlePeriodChange = (newPeriod: any) => {
    setSelectedPeriod(newPeriod);
    // You can add additional logic here if needed
  };

  return (
    <div className="w-10/12 mt-6 mx-auto flex flex-row justify-around h-[168px]">
      <div className="w-[28.5%] h-[198px] -mt-12">
        <select
          value={selectedPeriod}
          onChange={(e) => handlePeriodChange(e.target.value)}
          className="mb-[10px] p-2 border rounded"
        >
          <option value="ბოლო 30 დღე">30 დღე</option>
          <option value="ბოლო 60 დღე">60 დღე</option>
          <option value="ბოლო 90 დღე">90 დღე</option>
          <option value="ბოლო 1 წელი">1 წელი</option>
          <option value="მთლიანად">მთლიანად</option>
        </select>
        <div className="bg-[#AAD7D9] rounded-t-[10px] h-14 flex justify-center items-center text-[17px]">
          მომხმარებლების რაოდენობა
        </div>
        <div className="bg-[#FBF9F1] h-28 rounded-b-[10px] text-4xl flex justify-evenly items-center">
          {" "}
          127{" "}
          <span className="text-bl text-xl flex items-center">
            {selectedPeriod}
          </span>
        </div>
      </div>

      <div className="w-[28.5%] h-[168px]">
        <div className="bg-[#AAD7D9] rounded-t-[10px] h-14 flex justify-center items-center text-[17px]">
          შემოსავალი
        </div>
        <div className="bg-[#FBF9F1] h-28 rounded-b-[10px] text-4xl flex justify-evenly items-center">
          {" "}
          127{" "}
          <span className="text-bl text-xl flex items-center">
            {selectedPeriod}
          </span>
        </div>
      </div>

      <div className="w-[28.5%] h-[168px]">
        <div className="bg-[#AAD7D9] rounded-t-[10px] h-14 flex justify-center items-center text-[17px]">
          შეფასებების რაოდენობა
        </div>
        <div className="bg-[#FBF9F1] h-28 rounded-b-[10px] text-4xl flex justify-evenly items-center">
          {" "}
          127{" "}
          <span className="text-bl text-xl flex items-center">
            {selectedPeriod}
          </span>
        </div>
      </div>
    </div>
  );
};
