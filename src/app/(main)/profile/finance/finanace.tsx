'use client';

import { useState } from 'react';
import { manrope } from '@/lib/font';
import { Button } from '@/components/ui/button';
import { ActiveTab } from './activeTab';
import { HistoryTab } from './historyTab';
import { RepayDetails } from './repayDetails';
import { productDetails } from '@/lib/static';

export const Finance = () => {
    const [active, setActive] = useState<string>("activeTab");
    const [displayRepayDetails, setDisplayRepayDetails] = useState<boolean>(false)

    return (
        <>
            {
                !displayRepayDetails ?
                    <div className='w-[375px]'>
                        <h3 className={`${manrope.className} text-[20px] font-semibold text-[#0C6170] text-center md:text-start lg:text-start xl:text-start`}>Power Financing</h3>

                        <div className='border border-1 border-[#E5E5E5] w-[342px] p-1 flex justify-between rounded-[5px] mt-5'>
                            <Button className={`${manrope.className} ${active === "activeTab" ? "bg-[#0C6170] text-[#ffffff]" : " bg-transparent text-[#000000]"} text-[12.57px] rounded-[5px] w-[163.37px] font-[500] cursor-pointer`}
                                onClick={() => setActive("activeTab")}
                            >
                                Active
                            </Button>
                            <Button className={`${manrope.className} ${active === "historyTab" ? "bg-[#0C6170] text-[#ffffff]" : " bg-transparent text-[#000000]"} text-[12.57px] rounded-[5px] w-[163.37px] font-[500] cursor-pointer`}
                                onClick={() => setActive("historyTab")}
                            >
                                History
                            </Button>
                        </div>

                        <div>
                            {
                                active === "activeTab" ?
                                    <ActiveTab productDetails={productDetails} setDisplayRepayDetails={setDisplayRepayDetails} displayRepayDetails={displayRepayDetails} />
                                    :
                                    <HistoryTab productDetails={productDetails} />
                            }
                        </div>
                    </div>

                    :

                    <RepayDetails />
            }
        </>
    )
}

