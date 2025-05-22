import ContectedDevices from "./Introo/ContectedDevices";
import EmergencyFeed from "./Introo/EmergencyFeed";
import Identity from "./Introo/Identity";

function Intro() {
  return (
    <div className="flex-2 min-w-[230px] basis-0 p-4">
      <Identity />
      <ContectedDevices />
      <EmergencyFeed />
    </div>
  );
}

export default Intro;
