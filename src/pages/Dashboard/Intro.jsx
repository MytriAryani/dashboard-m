import TriggerHistory from "./TriggerHistory";
import Identity from "./Introoo/Identity";
import EmergencyContacts from "./EmgcontactsandLT/EmergencyContacts";
import DeviceInfo from "./Introoo/DeviceInfo";




function Intro() {
  return (
    <div className=" flex flex-row flex-wrap gap-2 p-4 pb-0 h-[205px]">
      <Identity/>
      <DeviceInfo/>
      
    </div>
  );
}

export default Intro;
