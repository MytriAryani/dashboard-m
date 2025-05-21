import DeviceStatus from "./DeviceStatus";
import Intro from "./Intro";
import SideNav from "./SideNav";
import "./style.css";

function Content() {
  return (
    <div className="rounded-b-lg min-h-[84vh]">
      <div className="flex w-full h-full">
        <SideNav />
        <div className="flex flex-row flex-wrap w-full">
        <Intro />
        <DeviceStatus />
        </div>
      </div>
    </div>
  );
}

export default Content;
