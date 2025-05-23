import { UserRound } from 'lucide-react';
import {FiChevronRight} from 'react-icons/fi';

function Identity() {
  return(
    <div className=" min-w-[90%] flex flex-col justify-center items-center bg-[#111e2e] rounded-lg h-40 border border-[#112e34] mb-2">
        <div className="w-full flex flex-row justify-between pl-5 pr-3 pb-1 items-center border-b-1 border-[#112e34]">
            <div className="flex flex-row items-center gap-3">
              <img src="../public/profile.jpg" alt="profile" className="rounded-full w-10 h-10" />
              <div className="flex flex-col">
                <p className='text-[16px]'>David Clark</p>
                <p className='text-[14px] text-[#bebdbd]'>david@example.com</p>
              </div>
            </div>

          
        </div>
        <div className='w-full text-[#bebdbd] flex flex-col justify-center items-start mt-1 pr-3 pl-5'>
            <p className='text-white text-[16px]'>Email <span className='text-[14px] text-[#bebdbd] ml-6'>david@example.com</span></p>
            <p className='text-white text-[16px]'>Phone <span className='text-[14px] text-[#bebdbd] ml-4'>(123) 456-7390</span></p>
            <p className='text-white text-[16px]'>User ID <span className='text-[14px] text-[#bebdbd] ml-2'>123456</span></p>
            
        </div>
    </div>
  );
}

export default Identity;
