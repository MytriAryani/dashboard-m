import NavBar from "../../components/Nav/NavBar";
import AboutUs from "./AboutUs";
import Carousel from "./carousel";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import RealScenerios from "./RealScenerios";


function Home() {

   
  return (
    <div className="m-0 p-0">
      <NavBar/>
        <Carousel />
        <AboutUs/>
        <RealScenerios/>
        <Features/>
        <HowItWorks/>
    </div>
  );
}
export default Home;