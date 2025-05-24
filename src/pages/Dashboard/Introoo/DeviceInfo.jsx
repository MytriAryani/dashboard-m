import { useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";


function DeviceInfo() {
  
  const [connectDevice, setConnectDevice] = useState("");
  const toggleConnectDevice=()=>{
    setConnectDevice((connectDevice)=>!connectDevice);
  }
  return (
    <div className="min-w-[204px] max-[551px]:h-fit flex-1 flex flex-row flex-wrap h-full">
    <div className="flex flex-col flex-wrap justify-around border bg-[#111e2e] rounded-lg border-[#112e34] w-full"> 
    
      <div className="ml-5 mr-5 border-b-1 border-[#112e34] flex flex-row justify-between items-center h-12 ">
        <p className="text-[16px] ">Device Info</p>
      </div>
     
    
    <div>
      <div className="ml-5 mr-5 flex flex-row flex-wrap justify-between items-center">
        <p>Device Name</p>
        <p className="text-[#bebdbd] text-[14px]">MITR Mini</p>
      </div>
      <div  className="ml-5 mr-5 flex flex-row flex-wrap justify-between items-center">
        <p>Device ID</p>
        <p className="text-[#bebdbd] text-[14px]">MITR4XL80X</p>
      </div>
    </div>
    <div className="flex justify-center flex-wrap gap-3 mt-2 mb-3 items-center">
      
      <PrimaryButton
          text={connectDevice ? "Disconnect Device" : "Connect to Device"}
          onClick={toggleConnectDevice}
        />
      <SecondaryButton text="Stop Triggering"/>
    </div>
    
  </div>
  
    </div>
    );
};
  

export default DeviceInfo;
