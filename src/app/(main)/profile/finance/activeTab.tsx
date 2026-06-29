'use client';

import { manrope } from '@/lib/font';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { type OrderProd } from '@/services/product.service';

type OrderProps = {
    productDetails: OrderProd[]
    setDisplayRepayDetails: React.Dispatch<React.SetStateAction<boolean>>
    displayRepayDetails: boolean
}

export const ActiveTab = ({ productDetails, setDisplayRepayDetails, displayRepayDetails }: OrderProps) => {

    const toggle = () => {
        setDisplayRepayDetails(!displayRepayDetails)
    }

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
                <Button className={`${manrope.className} bg-[#0C6170] w-full mt-5 rounded-[5px] text-[12.29px] font-semibold cursor-pointer`}
                    onClick={toggle}
                >
                    Repay Now
                </Button>
            </div>
        </div>
    )
}

