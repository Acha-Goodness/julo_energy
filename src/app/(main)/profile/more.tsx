'use client';

import { manrope } from '@/lib/font';
import { Button } from '@/components/ui/button';
import { userInfo } from '@/lib/static';

export const More = () => {

    return (
        <div className='w-[380px]'>
            <h3 className={`${manrope.className} text-[20px] font-semibold text-[#0C6170]`}>Profile</h3>

            <div className='mt-10'>
                {
                    userInfo.map((info, idx) => (
                        <div key={idx} className='border border-[#E5E5E5] px-3 py-2 mt-3 rounded-[5px]'>
                            <p className={`${manrope.className} font-[500] text-[11px] text-[#868E96]`}>{info.title}</p>
                            <p className={`${manrope.className} font-[400] text-[14px] text-[#212529]`}>{info.info}</p>
                        </div>
                    ))
                }
            </div>
            <Button className={`${manrope.className} w-full mt-5 rounded-[5px] text-[16px] font-semibold`}>Continue</Button>
        </div>
    )
}
