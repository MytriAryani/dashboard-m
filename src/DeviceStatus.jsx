import DeviceInfo from "./DeviceStatus/DeviceInfo";
import LiveTracking from "./DeviceStatus/LiveTracking";
import MapView from "./DeviceStatus/MapView";

function DeviceStatus() {
  return (
    <div className="flex-3 min-w-[230px] basis-0 p-4 pb-0">
      
      <DeviceInfo />
      <LiveTracking />
      {/* <MapView /> */}
    </div>
  );
}

export default DeviceStatus;
