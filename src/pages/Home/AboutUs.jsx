import PrimaryButton from "../../components/PrimaryButton";
import { ArrowRight } from 'lucide-react';

export default function AboutUs(){
    return(
        <div className="flex flex-wrap mt-40 mb-20">
            <div className="flex-1 flex flex-col p-4 pl-25 pr-5">
                <p className="text-[#bebdbd] text-sm">WELCOME TO MITR.COM</p>
                <p className="text-3xl">About <span className="text-[#04969b]">Mitr</span></p>
                <br/>
                <p>
                    <b>Mitr SOS</b> is a smart emergency alert system designed to provide <b>silent, fast, and secure help</b> in critical situations. Our wearable devices use <b>voice triggers</b> and real-time location tracking to notify trusted contacts instantly—keeping you safe without drawing attention.
<br/><br/>
You can manage your device, update contacts, and customize triggers directly from our platform. With MITR, personal safety meets seamless technology.


                </p>
                <div className="mt-5">
                    <PrimaryButton text="Learn More "/> 
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img className="w-80 h-80 rounded-2xl shadow-[6px_6px_12px_rgba(255,255,255,0.03),_-6px_6px_12px_rgba(255,255,255,0.03),0px_10px_15px_rgba(255,255,255,0.05)]" src="about.png" alt="product picture"/>
            </div>
        </div>
    );
}