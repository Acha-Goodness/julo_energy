'use client';

import { manrope } from '@/lib/font';
import { Button } from '@/components/ui/button';
import { PendingOrders } from './pendingorders';
import { useState } from 'react';
import { CompletedOrders } from './completedorders';
import { productDetaiils } from '@/lib/static';

export const Orders = () => {
    const [order, setOrder] = useState<string>("pending");

    return (
        <div className='w-[375px]'>
            <h3 className={`${manrope.className} text-[20px] font-semibold text-[#0C6170] text-center md:text-start lg:text-start xl:text-start`}>Order Management</h3>

            <div className='border border-1 border-[#E5E5E5] w-[342px] p-1 flex justify-between rounded-[5px] mt-5'>
                <Button className={`${manrope.className} ${order === "pending" ? "bg-[#0C6170] text-[#ffffff]" : " bg-transparent text-[#000000]"} text-[12.57px] rounded-[5px] w-[163.37px] font-[500] cursor-pointer`}
                    onClick={() => setOrder("pending")}
                >
                    Pending Order
                </Button>
                <Button className={`${manrope.className} ${order === "completed" ? "bg-[#0C6170] text-[#ffffff]" : " bg-transparent text-[#000000]"} text-[12.57px] rounded-[5px] w-[163.37px] font-[500] cursor-pointer`}
                    onClick={() => setOrder("completed")}
                >
                    Completed Order
                </Button>
            </div>

            <div>
                {
                    order === "pending" ?
                        <PendingOrders productDetails={productDetaiils} />
                        :
                        <CompletedOrders productDetails={productDetaiils} />
                }
            </div>


        </div>
    )
}
