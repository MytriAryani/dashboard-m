import { BsBell } from "react-icons/bs";
import { Search } from "lucide-react";
function NavBar() {

  const hasNotification=true;
  return (
    <div className="flex flex-row justify-between items-center bg-[#111e2e] h-16 rounded-t-lg border-1 border-[#112e34]">
      <div className="flex flex-row items-center w-1/12 justify-around ml-6">
        <img src="../public/logo-2.jpg" alt="mitr logo" className="w-8 h-8 rounded-full"/>
        <h1 className="text-[22px] font-bold">MITR</h1>
      </div>
      <div className="flex flex-row items-center w-1/2 justify-end gap-5 mr-6">
      <div className="relative w-60">
      <Search className="absolute text-[#bebdbd] top-1.5 left-1.5 w-5 h-5 pl-1"/>
      <input type="text" placeholder="Search"  className="border max-[518px]:w-40 max-[437px]:w-20 bg-[#090d19] rounded-full p-2 w-60 border-[#112e34] h-8 text-[12px] text-[#bebdbd] selection:border-1 pl-8"/>
      </div>
       <div className="relative">
      <BsBell className="w-6 h-6 text-white" />
      {hasNotification && (
        <span className="absolute top-0.5 right-1 h-2 w-2 rounded-full bg-red-400" />
      )}
    </div>
    <img src="../public/profile.jpg" alt="profile picture" className="w-8 h-8 rounded-full"></img>
    </div>
    </div>
  );

}

export default NavBar;
