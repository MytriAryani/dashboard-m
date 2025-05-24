import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";


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
                        <li className="pt-1 pb-1 "><a href="#">Home</a></li>
                        <li className="pt-1 pb-1 "><a href="#">Dashboard</a></li>
                        <li className="pt-1 pb-1 "><a href="#">Map</a></li>
                        <li className="pt-1 pb-1 "><a href="#">Contact Us</a></li>
                        <li className="pt-1 pb-1 min-[700px]:hidden"><a href="#">Login</a></li>
                        <li className="pt-1 pb-1 min-[700px]:hidden"><a href="#">Sign Up</a></li>
                        
                        </ul>    
                        
                </div> 
            )}
        </div>
    );
}

export default HamMenu;