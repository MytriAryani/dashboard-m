import DeviceStatus from "./Sectiontwo";
import Intro from "./Intro";
import "../../style.css";
import SectionTwo from "./Sectiontwo";
import TriggerHistory from "./TriggerHistory";

function Content() {
  return (
    <div className="rounded-b-lg min-h-[84vh] bg-[#090d19]">
      
        
        <div className="flex flex-col w-full">
        <Intro />
        <SectionTwo />
        <div className="w-full flex justify-center mt-1 items-center mb-4"><TriggerHistory/></div>
        </div>
        
      </div>
    
  );
}

export default Content;
