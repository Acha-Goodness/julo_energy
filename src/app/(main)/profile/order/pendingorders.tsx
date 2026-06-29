'use client';

import { useState } from 'react';
import { manrope } from '@/lib/font';
import Image from 'next/image';
import { type OrderProd } from '@/services/product.service';
import { useRouter } from 'next/navigation';
import OrderTimeline from './orderTimeline';

type OrderProps = {
    productDetails: OrderProd[]
}

export const PendingOrders = ({ productDetails }: OrderProps) => {
    const [displayStatus, setDisplayStatus] = useState(false)
    const router = useRouter();

    const toggle = () => {
        setDisplayStatus(!displayStatus)
    }

    return (
        <>
            {
                !displayStatus ?
                    <div className='mt-5'>
                        {
                            productDetails.map((product, idx) => (
                                <div key={idx} className='border-b-5 border-[#F5F5F5] p-3 mt-3 rounded-[5px] cursor-pointer'
                                    onClick={toggle}
                                >
                                    <div className='flex justify-between'>
                                        <p className={`${manrope.className} text-[12.6px] font-[600] text-[#212529]`}>{product.initilStatus}</p>
                                        <p className={`${manrope.className} text-[12.6px] text-[#0C6170]`}>{product.currentStatus}</p>
                                    </div>
                                    <div className='flex gap-5 items-center mt-5'>
                                        <div className='bg-[#F9F9F9] w-[152.04px] h-[145.75px] flex items-center justify-center'>
                                            <Image src={product.img} alt='img' />
                                        </div>
                                        <div>
                                            <p className={`${manrope.className} text-[12.6px] font-[500] text-[#000000]`}>{product.name}</p>
                                            <p className={`${manrope.className} text-[12.6px] text-[#939393]`}>{product.date}</p>
                                            <p className={`${manrope.className} text-[12.6px] font-[500] text-[#000000] mt-4`}>{product.price}</p>
                                            <p className={`${manrope.className} text-[12.6px] text-[#939393]`}>{product.paymethod}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    :

                    <OrderTimeline />
            }
        </>
    )
}
