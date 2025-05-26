import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";


function HamMenu(){
    const [isOpen, setOpen] = useState(false);
    const ref=useRef(null);

    useClickAway(ref,()=>setOpen(false));

    return(
        <div ref={ref} className="min-[930px]:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#ffffff"/>
            {isOpen && (
                <div className="fixed left-5 shadow-4xl right-5 top-20 p-5 pb-2 pt-0 rounded-2xl bg-[#090d19] border border-t-0 border-[#112e34]">
                    <ul>
                        <li className="pt-1 pb-1 "><Link to="/home">Home</Link></li>
                        <li className="pt-1 pb-1 "><Link to="/dashboard">Dashboard</Link></li>
                        <li className="pt-1 pb-1 "><Link to="/dashboard">Map</Link></li>
                        <li className="pt-1 pb-1 "><Link to="#">Contact Us</Link></li>
                        <li className="pt-1 pb-1 min-[700px]:hidden"><Link to="/">Login</Link></li>
                        <li className="pt-1 pb-1 min-[700px]:hidden"><Link to="/signup">Sign Up</Link></li>
                        
                        </ul>    
                        
                </div> 
            )}
        </div>
    );
}

export default HamMenu;