import PrimaryButton from "../../components/PrimaryButton";


export default function AboutUs() {
    return (
        <div className="flex flex-col text-center md:text-left md:flex-row mt-20 mb-10 px-4 lg:px-20 gap-10">
           
            <div className="flex-1 flex flex-col">
                <p className="text-[#bebdbd] text-sm">WELCOME TO MITR.COM</p>
                <p className="text-2xl md:text-3xl font-semibold">
                    About <span className="text-[#04969b]">MITR</span>
                </p>
                <br />
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                    <b>Mitr SOS</b> is a smart emergency alert system designed to provide <b>silent, fast, and secure help</b> in critical situations. Our wearable devices use <b>voice triggers</b> and real-time location tracking to notify trusted contacts instantly—keeping you safe without drawing attention.
                    <br /><br />
                    You can manage your device, update contacts, and customize triggers directly from our platform. With MITR, personal safety meets seamless technology.
                </p>
                <div className="mt-5">
                    <PrimaryButton text="Learn More " />
                </div>
            </div>

          
            <div className="flex-1 flex justify-center items-center">
                <img
                    className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl shadow-[6px_6px_12px_rgba(255,255,255,0.03),_-6px_6px_12px_rgba(255,255,255,0.03),0px_10px_15px_rgba(255,255,255,0.05)]"
                    src="about.png"
                    alt="product picture"
                />
            </div>
        </div>
    );
}
