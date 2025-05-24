import DeviceInfo from "./DeviceStatus/DeviceInfo";
import LiveTracking from "./DeviceStatus/LiveTracking";


function DeviceStatus() {
  return (
    <div className="flex-6 min-w-[230px] basis-0 p-4 pb-0">
     
      <DeviceInfo/>
      <LiveTracking />
     
    </div>
  );
}

export default DeviceStatus;
