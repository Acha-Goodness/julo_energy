'use client';

import { manrope } from '@/lib/font';
import { Button } from '@/components/ui/button';
import powgen from '@/assets/images/powgenerator.png';
import Image from 'next/image';
import { type OrderProd } from '@/services/product.service';

type OrderProps = {
    productDetails: OrderProd[]
}

export const HistoryTab = ({ productDetails }: OrderProps) => {

    return (
        <div className='w-[342px]'>
            <div className='mt-5'>
                {
                    productDetails.map((product, idx) => (
                        <div key={idx} className='p-3 mt-3 rounded-[5px]'>
                            <p className={`${manrope.className} text-[13.61px] font-[500] text-[#000000] w-[98%]`}>{product.name}</p>
                            <p className={`${manrope.className} text-[11.47px] text-[#868E96]`}>{product.title}</p>
                            <div className='flex gap-8 items-center mt-5'>
                                <div className='bg-[#F9F9F9] w-[138.41px] h-[132.69px] flex items-center justify-center'>
                                    <Image src={product.img} alt='img' />
                                </div>
                                <div>
                                    <p className={`${manrope.className} text-[11.47px] text-[#000000]`}>{product.payment}</p>
                                    <p className={`${manrope.className} text-[14.74px] font-[700] text-[#0C6170]`}>{product.price}</p>

                                    <p className={`${manrope.className} text-[11.47px] text-[#000000] mt-4`}>{product.paymethod}</p>
                                    <p className={`${manrope.className} text-[14.74px] text-[#000000]`}>{product.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <Button className={`${manrope.className} bg-[#0C6170] w-full mt-5 rounded-[5px] text-[12.29px] font-semibold`}>Repay Now</Button>
            </div>
            <div>
                <div className='border-b-5 border-[#F5F5F5] p-3 mt-3 rounded-[5px]'>
                    <div className='flex justify-between'>
                        <p className={`${manrope.className} text-[12.6px] font-[600]`}>Paid Complete - 14, July 2025</p>
                    </div>
                    <div className='flex gap-5 items-center mt-5'>
                        <div className='bg-[#F9F9F9] w-[152.04px] h-[145.75px] flex items-center justify-center'>
                            <Image src={powgen} alt='img' />
                        </div>
                        <div>
                            <p className={`${manrope.className} text-[12.6px] font-[500] text-[#000000]`}>Julo Buddy 500watt</p>
                            <p className={`${manrope.className} text-[12.6px] text-[#939393]`}>Ordered: 6 July, 2025</p>
                            <p className={`${manrope.className} text-[12.6px] font-[500] text-[#000000] mt-4`}>$14,000.00</p>
                            <p className={`${manrope.className} text-[12.6px] text-[#939393]`}>Wallet Payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

