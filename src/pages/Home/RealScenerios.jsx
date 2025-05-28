
export default function RealScenerios(){

    const card=[
        {
            icon:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-primary mb-3" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"></path></svg>,
            title:"For Children",
            info:"Ensure your child's safety on their way to school or in outdoor activities — even when they don't carry a phone."
        },
        {
            icon:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" class="text-primary mb-3" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"></path></svg>,
            title:"For Women",
            info:"Protect yourself during commutes, while jogging, or in uncomfortable public encounters with a discreet safety solution."
        },
        {
            icon:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-primary mb-3" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path></svg>,
            title:"For Senior Citizens",
            info:"Give elderly family members a secure way to call for help during medical emergencies or unsafe conditions at home or outside."
        },
        {
            icon:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-primary mb-3" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"></path></svg>,
            title:"For Travelers & Solo Workers",
            info:"Stay safe in unfamiliar places. Ideal for field agents, delivery staff, cab drivers, or anyone traveling alone."
        },
        {
            icon:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-primary mb-3" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg>,
            title:"When Phones Can't Be Used",
            info:"Mitr activates through voice alone — perfect in situations where phones are out of reach, confiscated, or too risky to use."
        },
        {
            icon:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-primary mb-3" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path></svg>,
            title:"24/7 Emergency Response",
            info:"Works round the clock, silently listening for trigger words and sending alerts even if you're physically restrained or unconscious."
        },

    ];

    return(
        <div className="mt-20">
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl text-[#04969b] font-medium">REAL-LIFE SCENERIOS</p>
                <p className="text-4xl font-semibold mt-2">Who Needs <span className="text-[#04969b]">MITR</span>?</p>
                <p className="text-[#bebdbd] text-m mt-2">From kids to commuters, Mitr is your invisible ally in emergencies.</p>
            </div>
            <div className="flex justify-around items-center ml-20 mr-20 ">
                <div className="flex flex-row flex-wrap justify-around">
                    {card.map((card)=>{
                        return (
                            <div className="w-80 rounded-lg border border-[#04969b] p-4 pt-6 pb-8 flex flex-col justify-center items-center mt-10 hover:-translate-y-1 transition-all duration-200">
                                {card.icon}
                                <p className="text-[#04969b] text-center">{card.title}</p>
                                <p className="text-[#ffffff] text-center">{card.info}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}