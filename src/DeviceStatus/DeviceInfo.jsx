import React,{ useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';



function DeviceInfo() {
  const [percentage, setPercentage] = useState(75);
  const [strength, setStrength] = useState(3);
  const [version, setVersion] = useState("1.2.3");
  const [isOn, setIsOn] = useState(false);
  const toggleEmergency = () => {
    setIsOn(!isOn);
    console.log(`Emergency Mode: ${!isOn ? 'ON' : 'OFF'}`);

  };
  return (
    <div className="flex flex-wrap border bg-[#111e2e] rounded-lg border-[#112e34] w-full min-w-[230px]"> 
    <div className=" w-50 flex-1 mb-2 mr-2">
      <div className="ml-5 border-b-1 border-[#112e34] flex flex-row justify-between items-center h-12 ">
        <p className="text-[16px] ">Device Status</p>
      </div>
      <div className="flex flex-row justify-center items-center mt-2 ">
      
        <div className="w-50 h-40 p-2 flex flex-col items-center mb-2">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#37b2b6`,
              textColor: '#fff',
              trailColor: '#112e34',
            })}
          />
      </div>
    </div>
    </div>
    <div className="flex-1 flex flex-col items-center pr-4 pl-2">
      <div className="flex justify-between w-full min-w-40 mt-2 ml-2 pl-5 pr-5 pt-2 pb-2 border-b border-[#112e34]">
        <div>
            <p className="text-[16px]">Network</p>
        </div>
        <div className="flex space-x-1 items-end ">
        {[1,2,3,4,5].map((level) => (
          <div
            key={level}
            className={`w-2 rounded-sm ${
              strength >= level ? "bg-cyan-400" : "bg-cyan-900"
            }`}
            style={{ height: `${level * 6}px` }}
          ></div>
        ))}
      </div>
      </div>
      <div className="flex justify-between w-full min-w-40 mt-2 ml-2 pl-5 pr-5 pt-2 pb-2 border-b border-[#112e34]">
        <p className="text-[16px]">Firmware</p>
        <p className="text-[16px]">{version}</p>
      </div>
      <div className="flex justify-between w-full min-w-40 mt-2 ml-2 pl-5 pr-5 pt-2 pb-2 border-b border-[#112e34]">
        <div>
          <p className="text-[16px]">Modules</p>

        </div>
        
        <div className="flex justify-between  items-center">
          <div className="bg-[#095c5136] rounded-lg mr-2 pl-2 pr-2 h-5" >
            <p className="text-[12px]">GPS</p>
            </div>
          <div className="bg-[#095c5136] rounded-lg pl-2 pr-2 h-5" >
            <p className="text-[12px]">WiFi</p>
          </div>
        </div>
      
      </div>
      <div className="flex justify-between w-full min-w-40 mt-2 ml-2 pl-5 pr-5 pt-2 pb-2 ">
        <div>
          <p>Emergency Mode</p>
        </div>
        <div
      onClick={toggleEmergency}
      className={`w-7 h-5 bg-gray-800 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 `}
    >
      <div
        className={`bg-red-400 w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-2' : 'translate-x-0'
        }`}
      />
    </div>
      </div>
    </div>
  
    </div>
    );
};
  

export default DeviceInfo;
