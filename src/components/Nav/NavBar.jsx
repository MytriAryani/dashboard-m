
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import HamMenu from "./HamMenu";
function NavBar() {

 
  return (
    <div className="flex flex-row justify-between items-center bg-[#111e2e] h-16 rounded-t-lg border-1 border-[#112e34]">
      <div className="flex flex-row items-center flex-1 justify-around ml-6">
        <img src="logo-2.jpg" alt="mitr logo" className="w-8 h-8 rounded-full"/>
        <h1 className="text-[22px] font-bold">MITR</h1>
      </div>
      <div className="flex flex-row flex-12 items-center justify-end gap-2 mr-6">
        
      <div className="max-[930px]:hidden w-80">
        <ul className="flex flex-row justify-around">
          <li  className="text-[16px] text-white transition-all duration-200 ease-in-out transform hover:text-[#04969b] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner"><a href="/" >Home</a></li>
          <li  className="text-[16px] text-white transition-all duration-200 ease-in-out transform hover:text-[#04969b] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner"><a href="/" >Dashboard</a></li>
          <li  className="text-[16px] text-white transition-all duration-200 ease-in-out transform hover:text-[#04969b] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner"><a href="/" >Map</a></li>
          <li  className="text-[16px] text-white transition-all duration-200 ease-in-out transform hover:text-[#04969b] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-inner"><a href="/" >Contact Us</a></li>
        </ul>
      </div>
       <div className="flex flex-row items-center justify-end gap-2 w-42 max-[700px]:hidden">
        <PrimaryButton text="Login"/>
        <SecondaryButton text="Sign Up"/>
    </div>
      <HamMenu/>
    </div>
    </div>
  );

}

export default NavBar;
