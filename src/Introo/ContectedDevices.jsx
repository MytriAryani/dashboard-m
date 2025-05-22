import { Wifi,Star,Squircle } from "lucide-react";
import { useState } from "react";

function ContectedDevices() {

  const [devices,setDevices]=useState([{
    id:1,
    icon:Wifi,
    name:"Dad's Keychain",
    status:"Normal",
    charOne:"MITR Mini",
    charTwo:"MITR4XL80X",
    time:15,
    coordinates:[40.7128, -74.0060]
  },
{
  id:2,
  icon: Star,
  name: "Mom's Keychain",
  status: "Normal",
  charOne: "MITR Flex",
  charTwo: "MITR9BX20L",
  time: 5,
  coordinates:[51.5074, -0.1278]
},
{
  id:3,
  icon: Squircle,
  name: "Office button",
  status: "Emergency",
  charOne: "MITR Pack",
  charTwo: "MITR7YT11Z",
  time: 2,
  coordinates:[35.6762, 139.6503]
}]);
  
  
  return (
    <div className="w-full rounded-lg border-1 border-[#112e34] bg-[#111e2e]">
      <div className="flex flex-row justify-between w-full p-4">
        <p>Connected Devices</p>
        <p className="text-[#bebdbd]">{devices.length}</p>
      </div>
     
        {devices.map((device)=>{
          const Icon=device.icon;
          return(
          <div key={device.id} className="flex flex-row items-center justify-center pb-2 border-t-1 border-[#112e34]">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-10 h-10 rounded-lg bg-[#192c30] flex items-center justify-center ">
              <Icon className={`w-5 h-5 ${device.status==="Normal"? "text-[#37b2b6]" : "text-[#e47933]"}`} />
            </div>
          </div>
          <div className="flex-5">


            <div className="w-full flex flex-row items-center justify-between pl-1 pr-2 pt-1">
              <p className="text-[16px]">{device.name}</p>
              <div className={`text-center w-fit pl-2 pr-2 ${device.status==="Normal"? "bg-[#095c5150]" : "bg-[#61422538]"}  rounded-lg`}>
                <p className={`text-[14px] ${device.status==="Normal"? "text-[#ffffff]" : "text-[#e47933]"}`}>{device.status}</p>
              </div>
            </div>
            <div>
              <p className={` ${device.status==="Normal"? "text-[#bebdbd]" : "text-[#e47933]"} text-[14px] pl-1 pr-2`}>{device.charOne}</p>
            </div>
            <div className="flex justify-between pl-1 pr-2 ">
              <p className="text-[#bebdbd] text-[14px]">{device.charTwo}</p>
              <p className="text-[#bebdbd] text-[14px]">{device.time} min ago</p>
            </div>
            <div className="p-0 m-0">
              <a href={`https://www.google.com/maps?q=${device.coordinates[0]},${device.coordinates[1]}`} target="_blank" className="text-[12px] pl-1 text-[#37b2b6] hover:text-[#3df9ff]">Open in maps</a>
            </div>
          </div>
      </div>)})}

    </div>
  );
}

export default ContectedDevices;
