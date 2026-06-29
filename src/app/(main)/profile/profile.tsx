'use client';

import { manrope } from '@/lib/font';
import { Button } from '@/components/ui/button';
import { GoChevronRight } from "react-icons/go";
import { userInfo } from '@/lib/static';

export const Profile = () => {

    return (
        <div className='w-full md:w-[380px] lg:w-[380px] xl:w-[380px]'>
            <h3 className={`${manrope.className} text-[20px] font-semibold text-[#0C6170] text-center md:text-left lg:text-left xl:text-left`}>Profile</h3>

            <div className='md:mt-10 lg:mt-10 xl:mt-10'>
                {
                    userInfo.map((info, idx) => (
                        <div key={idx} className={`border border-[#E5E5E5] px-3 py-2 mt-3 rounded-[5px]`}>
                            <p className={`${manrope.className} font-[500] text-[11px] text-[#868E96]`}>{info.title}</p>
                            <p className={`${manrope.className} font-[400] text-[14px] text-[#212529]`}>{info.info}</p>
                            {
                                idx === 5 &&
                                <div className='bg-[#E2EDFF] w-[30%] md:w-[20%] lg:w-[15%] xl:w-[8%] h-[31px] flex items-center justify-between px-1 rounded-[2px] absolute left-[60%] md:left-[67%] lg:left-[56%] xl:left-[47.5%] 2xl:left-[42%] bottom-[-1.7%] md:bottom-[20%] lg:bottom-[19%] xl:bottom-[26%] 2xl:bottom-[25%]'>
                                    <p className={`${manrope.className} text-[12px] text-[#495057] font-[500]`}>Set Password</p>
                                    <GoChevronRight size={20} />
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
            <Button className={`${manrope.className} w-[100%] mt-5 rounded-[5px] text-[16px] font-semibold bg-[#0C6170]`}>Continue</Button>
        </div>
    )
}
