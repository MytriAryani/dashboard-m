import React, { useState } from 'react';

function MapView() {
  const [isOn, setIsOn] = useState(true);
       const toggleLivetracking = () => {
         setIsOn(!isOn);
         
     
       };
 
    return (<div className="bg-[#111e2e] rounded-lg border-[#112e34] w-full min-w-[300px] mt-2 mb-2 p-2">
      <div className=" w-50 flex-1 mb-2 mr-2 ml-2 mt-2">
        <p>Map View</p>
      </div>
      <div className=" h-30 w-full bg-[#0b111d] border-b-1 border-[#112e34]"></div>
      <div className="flex flex-row justify-between p-2">  
        <div className="flex justify-between ml-2">
          <div className="h-3 w-3 rounded-full bg-[#0f6667] mr-2 mt-2 flex flex-row justify-center items-center">
            <div className="h-2 w-2 rounded-full bg-[#37b2b6]"></div>
          </div>
        <p>Live Tracking</p>
         </div>
      
        <div
        onClick={toggleLivetracking}
        className={`w-7 h-5 bg-gray-800 flex items-center rounded-full p-1 mt-2 cursor-pointer transition-colors duration-300 `}
      >
        <div
          className={`bg-[#37b2b6] w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-2' : 'translate-x-0'
          }`}
        />
      </div>
        </div>
        <div className="flex flex-row justify-between ml-2 mt-2 p-2 border-t-1 border-[#112e34]">
          <div className='flex justify-between'>
            <div className="h-3 w-3 rounded-full bg-gray-800 mr-2 mt-2 flex flex-row justify-center items-center">
              <div className="h-2 w-2 rounded-full bg-[#0f6667]"></div>
            </div>
            <p>Live Tracking</p>
          </div>
        
          <p >{isOn ?'ON': 'OFF' }</p>
        </div>
          </div>
     
     
  
        );
}

export default MapView;
