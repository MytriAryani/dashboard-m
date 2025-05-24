import TriggerHistory from "./Introoo/TriggerHistory";
import Identity from "./Introoo/Identity";
import EmergencyContacts from "./Introoo/EmergencyContacts";




function Intro() {
  return (
    <div className="flex-4 min-w-[280px] basis-0 p-4">
      <Identity/>
      <EmergencyContacts/>
      <TriggerHistory/>
      
    </div>
  );
}

export default Intro;
