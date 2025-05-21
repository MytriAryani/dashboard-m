import { Search, Smartphone, Siren, Map, Settings } from 'lucide-react';

function SideNav() {
  return(
    <div className="max-[470px]:w-12 side-nav flex flex-col justify-start items-center w-24 border-r-1 border-[#112e34] min-h-[84vh] p-4 text-[14px]">
      <ul>
        <li className='text-[14px] max-[470px]:text-[8px] text-center text-[#bebdbd] hover:text-[#ffffff] pt-3 pb-3 w-full cursor-pointer hover:bg-[#111e2e]'><a className='flex flex-col items-center'><Smartphone className='max-[470px]:w-4 max-[470px]:h-4 w-6 h-6'/>Devices</a></li>
        <li className='text-[14px] max-[470px]:text-[8px] text-center text-[#bebdbd] hover:text-[#ffffff] pt-3 pb-3 w-full cursor-pointer hover:bg-[#111e2e]'><a className='flex flex-col items-center'><Search className='max-[470px]:w-4 max-[470px]:h-4 w-6 h-6'/>Overview</a></li>
        <li className='text-[14px] max-[470px]:text-[8px] text-center text-[#bebdbd] hover:text-[#ffffff] pt-3 pb-3 w-full cursor-pointer hover:bg-[#111e2e]'><a className='flex flex-col items-center'><Siren className='max-[470px]:w-4 max-[470px]:h-4 w-6 h-6'/>Emergency Feed</a></li>
        <li className='text-[14px] max-[470px]:text-[8px] text-center text-[#bebdbd] hover:text-[#ffffff] pt-3 pb-3 w-full cursor-pointer hover:bg-[#111e2e]'><a className='flex flex-col items-center'><Map className='max-[470px]:w-4 max-[470px]:h-4 w-6 h-6'/>Map</a></li>
        <li className='text-[14px] max-[470px]:text-[8px] text-center text-[#bebdbd] hover:text-[#ffffff] pt-3 pb-3 w-full cursor-pointer hover:bg-[#111e2e]'><a className='flex flex-col items-center'><Settings className='max-[470px]:w-4 max-[470px]:h-4 w-6 h-6'/>Settings</a></li>
      </ul>
    </div>
  );
}

export default SideNav;
