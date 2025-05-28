import NavBar from "../../components/Nav/NavBar";
import AboutUs from "./AboutUs";
import Carousel from "./carousel";
import Features from "./Features";
import RealScenerios from "./RealScenerios";


function Home() {

   
  return (
    <div className="m-0 p-0">
      <NavBar/>
        <Carousel />
        <AboutUs/>
        <RealScenerios/>
        <Features/>
    </div>
  );
}
export default Home;