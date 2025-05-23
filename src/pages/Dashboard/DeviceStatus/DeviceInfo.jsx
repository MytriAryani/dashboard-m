import React,{ useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";



function DeviceInfo() {
  

  
  return (
    <div className="flex flex-col flex-wrap border bg-[#111e2e] rounded-lg border-[#112e34] w-full min-w-[230px]"> 
    <div className=" w-full flex-1 mb-2 mr-2">
      <div className="ml-5 mr-5 border-b-1 border-[#112e34] flex flex-row justify-between items-center h-12 ">
        <p className="text-[16px] ">Device Info</p>
      </div>
     
    </div>
    <div>
      <div className="ml-5 mr-5 flex flex-row flex-wrap justify-between items-center">
        <p>Device Name</p>
        <p className="text-[#bebdbd]">MITR Mini</p>
      </div>
      <div  className="ml-5 mr-5 flex flex-row flex-wrap justify-between items-center">
        <p>Device ID</p>
        <p className="text-[#bebdbd]">MITR4XL80X</p>
      </div>
    </div>
    <div className="flex justify-center flex-wrap gap-3 mt-2 mb-3 items-center">
      
      <PrimaryButton text="Connect to Device"  />
      <button className="text-[16px] pt-1 pb-1 pl-3 pr-3 bg-[#ffffff27] rounded-[8px] cursor-pointer   active:translate-y-1 transition-all duration-200">Stop Triggering</button>
    </div>
    
  
    </div>
    );
};
  

export default DeviceInfo;
