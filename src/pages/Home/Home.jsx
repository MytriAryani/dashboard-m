import NavBar from "../../components/Nav/NavBar";
import AboutUs from "./AboutUs";
import Carousel from "./carousel";
import ContactUs from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import RealScenerios from "./RealScenerios";


function Home() {

   
  return (
    <div className="m-0 px-5">
      <NavBar/>
        <Carousel />
        <AboutUs/>
        <RealScenerios/>
        <Features/>
        <HowItWorks/>
        <ContactUs/>
        <Footer/>
    </div>
  );
}
export default Home;