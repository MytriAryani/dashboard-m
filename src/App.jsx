import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Content from "./pages/Dashboard/Content";


function App() {
  return (
    <>
    <div className="top-div rounded-lg border-1 border-[#112e34]">
    <NavBar/>
       
     <Content />
      </div>
      
      
    </>
  );
}

export default App;
