import { Wifi,Star,Squircle } from "lucide-react";
import { useState } from "react";

function ContectedDevices() {

  const [contacts,setContacts]=useState([{
    id:1,
    picture:"profile.jpg",
    name:"Dad",
    phNum:"9876987676",
    relation:"Father",
  },
{
  id:2,
  picture: "profile.jpg",
  name: "Mom",
  phNum:"9876988778",
  relation: "Mother",
},
{
  id:3,
  picture: "profile.jpg",
  name: "Jane",
  phNum: "9876987667",
  relation: "Sister",
}]);
  
  
  return (
    <div className="w-full rounded-lg border-1 border-[#112e34] bg-[#111e2e]">
      <div className="flex flex-row justify-between w-full p-4">
        <p>Emergency Contacts</p>
        {/* <p className="text-[#bebdbd]">{contacts.length}</p> */}
      </div>
     
        {contacts.map((contact)=>{
        
          return(
          <div key={contact.id} className="flex flex-row items-center justify-around pb-2 border-t-1 border-[#112e34]">
          <div className="flex-1 flex items-center justify-center ">
            
              <img className={`w-8 h-8 rounded-full ml-2 `} src={`${contact.picture}`}/>
            
          </div>
          <div className="flex-5">


            <div className="w-full flex flex-row items-center justify-between pl-1 pr-2 pt-1">
              <p className="text-[16px]">{contact.name}</p>
              <div className={`text-center w-fit pl-2 pr-2 bg-[#192c30b2]  rounded-lg`}>
                <p className="text-[14px] text-[#ffffff]">{contact.relation}</p>
              </div>
            </div>
            <div>
              <p className="text-[#bebdbd] text-[14px] pl-1 pr-2">{contact.phNum}</p>
            </div>
            
          </div>
      </div>)})}

    </div>
  );
}

export default ContectedDevices;
