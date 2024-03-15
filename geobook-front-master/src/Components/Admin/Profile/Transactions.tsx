export const Transactions = () => {
  return (
    <>
      <div className="mt-28 bg-bl text-2xl rounded-[20px] w-60 h-14 flex items-center justify-center">
        ტრანზაქციები
      </div>
      <div className="-ml-6 w-full mt-20">
        <table className="table-auto w-full ">
          <thead>
            <tr className="text-black text-center pb-2 border-b-2 border-black">
              <th className="w-36 mr-2 ml-2 border-r border-black border-dotted">
                <div className="mx-6 bg-bl h-9 rounded-md flex items-center justify-center">
                  სახელი/გვარი
                </div>
                <hr className="mb-3"/>
              </th>
              <th className="w-36 mr-2 ml-2 border-r border-black border-dotted">
                <div className="mx-5 bg-bl h-9 rounded-md flex items-center justify-center">
                  კატეგორია
                </div>
                <hr className="mb-3"/>
              </th>
              <th className="w-36 mr-2 ml-2 border-r border-black border-dotted">
                <div className="mx-5 bg-bl h-9 rounded-md flex items-center justify-center">
                  თარიღი
                </div>
                <hr className="mb-3"/>
              </th>
              <th className="w-36 mr-2 ml-2">
                <div className="mx-5 bg-bl h-9 rounded-md flex items-center justify-center ">
                  რაოდენობა
                </div>
                <hr className="mb-3"/>
              </th>
            </tr>
          </thead>
          {/* Added a line before tbody */}
          <tbody>
            <tr className=" text-center hover:bg-gray-100 text-base mb-6">
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">lorem lorem <hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">football<hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">2024<hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36">15₾<hr className="mb-[2px]"/></td>
            </tr>
            <tr className=" text-center hover:bg-gray-100 text-base mb-6">
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">lorem lorem <hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">football<hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">2024<hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36">15₾<hr className="mb-[2px]"/></td>
            </tr>
            <tr className=" text-center hover:bg-gray-100 text-base mb-6">
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">lorem lorem <hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">football<hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36 border-r border-black border-dotted">2024<hr className="mb-[2px]"/></td>
              <td className="px-3 py-2 w-36">15₾<hr className="mb-[2px]"/></td>
            </tr>
           


            
            
          </tbody>
        </table>
      </div>
    </>
  );
};