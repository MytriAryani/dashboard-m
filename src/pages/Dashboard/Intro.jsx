import EmergencyFeed from "./Introoo/EmergencyFeed";
import Identity from "./Introoo/Identity";
import ContectedDevices from "./DeviceStatus/ContectedDevices";



function Intro() {
  return (
    <div className="flex-1 min-w-[230px] basis-0 p-4">
      <Identity/>
      <ContectedDevices/>
      <EmergencyFeed/>
      
    </div>
  );
}

export default Intro;
