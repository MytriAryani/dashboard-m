import DeviceInfo from "./Introoo/DeviceInfo";
import LiveTracking from "./EmgcontactsandLT/LiveTracking";
import EmergencyContacts from "./EmgcontactsandLT/EmergencyContacts";


function SectionTwo() {
  return (
    <div className="flex flex-row flex-wrap gap-2 p-4 pb-0 h-fit ">
     
      <EmergencyContacts/>
      <LiveTracking />
     
    </div>
  );
}

export default SectionTwo;
