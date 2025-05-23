import "./App.css";
import Content from "./pages/Dashboard/Content";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <div className="top-div rounded-lg border-1 border-[#112e34]">
    <NavBar />
    
    
     <Content />
      </div>
      
      
    </>
  );
}

export default App;
