import { UserRound } from 'lucide-react';
import {FiChevronRight} from 'react-icons/fi';

function Identity() {
  return(
    <div className=" min-w-[90%] flex flex-col justify-center items-center bg-[#111e2e] rounded-lg h-24 border border-[#112e34] mb-2">
        <div className="w-full flex flex-row justify-between pl-5 pr-3 pb-1 items-center border-b-1 border-[#112e34]">
            <div className="flex flex-row items-center gap-3">
              <img src="../public/profile.jpg" alt="profile" className="rounded-full w-10 h-10" />
              <div className="flex flex-col">
                <p className='text-[16px]'>David Clark</p>
                <p className='text-[14px] text-[#bebdbd]'>david@example.com</p>
              </div>
            </div>

          <FiChevronRight className="w-5 h-5 text-[#bebdbd]"/>
        </div>
        <div className='w-full text-[#bebdbd] flex flex-row justify-between items-center mt-1 pr-3 pl-3'>
          
            <div className='flex items-start gap-2 h-5'>
              <UserRound className='w-4 h-4'/>
              <p className='text-[14px] '>Admin/Owner</p>
            </div>
          
          <p className='text-[12px]'>1 hour ago</p>
        </div>
    </div>
  );
}

export default Identity;
