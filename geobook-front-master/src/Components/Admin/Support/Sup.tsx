import { IoIosSend } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export const Sup = () => {
  return (
    <>
      <div className="w-10/12 mt-6 mx-auto">
        <table className="table-auto w-full ">
          <thead>
            <tr className="text-black text-center pb-2 border-b-2 border-black">
              <th className="w-1/5 mr-2 ml-2 border-r border-black border-dotted">
                <div className="mx-6 bg-bl h-9 rounded-md flex items-center justify-center">
                  მომხმარებელი
                </div>
                <hr className="mb-3" />
              </th>
              <th className="w-1/3 mr-2 ml-2 border-r border-black border-dotted">
                <div className="mx-5 bg-bl h-9 rounded-md flex items-center justify-center">
                  კითხვა
                </div>
                <hr className="mb-3" />
              </th>
              <th className="w-1/3 mr-2 ml-2">
                <div className="mx-5 bg-bl h-9 rounded-md flex items-center justify-center ">
                  Support - ის პასუხი
                </div>
                <hr className="mb-3" />
              </th>
            </tr>
          </thead>
          {/* Added a line before tbody */}
          <tbody>
            <tr className=" text-center hover:bg-gray-100 text-base mb-6 border-b-2 border-b-bl border-solid">
              <td className="px-3 py-2 w-1/5 border-r border-black border-dotted">
                loremlorem@gmail.com <hr className="mb-[2px]" />
              </td>
              <td className="px-3 py-2 border-r border-black border-dotted">
                რა ღირს 1 საათი ფლეოსთეიშენი?
                <hr className="mb-[2px]" />
              </td>
              <td className="pr-3 py-2 pl-5">
                <div className="flex flex-row items-center">
                  <textarea className="w-[85%] float-start" /> <IoIosSend className="w-10 h-10 ml-auto hover:text-gray-900 text-gray-600 hover:cursor-pointer"/>
                </div>{" "}
                <hr className="mb-[2px]" />
              </td>
            </tr>


            <tr className=" text-center hover:bg-gray-100 text-base mb-6 border-b-2 border-b-bl border-solid">
              <td className="px-3 py-2 w-1/5 border-r border-black border-dotted">
                loremlorem@gmail.com <hr className="mb-[2px]" />
              </td>
              <td className="px-3 py-2 border-r border-black border-dotted">
                რა ღირს 1 საათი ფლეოსთეიშენი?
                <hr className="mb-[2px]" />
              </td>
              <td className="pr-3 py-2 pl-5">
                <div className="flex flex-row items-center">
                  <div className="w-10 h-10 mr-auto"></div>  15ლარი <MdEdit className="w-10 h-10 ml-auto hover:text-gray-900 text-gray-600 hover:cursor-pointer"/>
                <hr className="mb-[2px]" />
                </div>{" "}
                <hr className="mb-[2px]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
