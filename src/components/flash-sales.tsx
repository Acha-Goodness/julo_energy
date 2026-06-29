'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { type ProductT } from '@/services/product.service';
import { cartService } from '@/services/cart.service';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { manrope, gabarito } from "@/lib/font";

interface FlashCardProps {
    flashProds: ProductT[];
    pathname?: string
}

export function FlashSalesCard({ flashProds, pathname }: FlashCardProps) {
    const router = useRouter();
    const [addingToCart, setAddingToCart] = useState(false);

    const handleNavigate = (flashProd: ProductT) => {
        router.push(
            `/products/${flashProd.id}?data=${encodeURIComponent(
                JSON.stringify(flashProd)
            )}`
        );
    };


    return (
        <div className={`${pathname === "/flashproducts" && "grid grid-cols-2 md:flex lg:flex xl:flex"} flex md:flex-row lg:flex-row xl:flex-row justify-between gap-2 md:gap-2 lg:gap-3 xl:gap-6 px-2 md:px-5 lg:px-5 xl:px-5 md:pt-0 lg:pt-5 xl:pt-5 overflow-x-auto no-scrollbar scroll-smooth`}>
            {flashProds.map((flashProd) => (
                <motion.div
                    key={flashProd.id}
                    whileHover={{ y: -8 }}
                    onClick={() => handleNavigate(flashProd)}
                    className={`${pathname === "/flashproducts" && "w-[191.46px]"} bg-[#fff] rounded-[10px] w-[113.43px] shrink-0 md:shrink lg:shrink xl:shrink md:w-[18%] lg:w-[18%] xl:w-[18%] mt-5 lg:mt-0 mb:mt-0 overflow-hidden hover:shadow-2xl hover:shadow-[#1B4D54]/10 transition-all duration-500 group cursor-pointer`}
                >
                    {/* Product Image */}
                    < div className={`bg-[#F9F9F9] p-2 h-[110.04px] md:h-[13vh] lg:h-[15vh] xl:h-[23vh]`}>
                        {/* Badges */}
                        < div className="flex justify-end w-full" >
                            <p className={`${manrope.className} bg-[#FFE2E2] px-1 text-[#E70000] text-[8px] md:text-[10px] lg:text-[10px] xl:text-[14px] font-medium rounded-[5px] uppercase`}>-15%</p>
                        </div >
                        <div className="flex justify-center items-center">
                            <Image
                                src={flashProd.image}
                                alt={flashProd.name}
                                className={`w-[70px] h-[70px] md:w-[60%] lg:w-[60%] xl:w-[100px] xl:h-[150px] object-contain`}
                            />
                        </div>
                    </div >

                    {/* Product Info */}
                    <div className="py-2" >
                        <div className="mb-[2%]">
                            <p className={`${manrope.className} ${pathname === "/flashproducts" && "text-[13.68px]"} text-[8.11px] md:text-[10px] lg:text-[13.44px] xl:text-[13.44px] text-[#272727]`}>
                                {flashProd.name}
                            </p>
                        </div>

                        <div className="">
                            <div className="items-baseline mb-[4%]">
                                <p className={`${gabarito.className} ${pathname === "/flashproducts" && "text-[16.28px]"} text-[9.65px] md:text-[12px] lg:text-[16px] xl:text-[16px] font-[600] text-[#0C6170]`}>₦{flashProd.price.toLocaleString()}</p>
                                <p className={`${manrope.className} ${pathname === "/flashproducts" && "text-[10.18px]"} text-[6.03px] md:text-[10px] lg:text-[10px] xl:text-[10px] font-regular text-[#7D7D7D]`}>₦{(Number(flashProd.price) * 1.15).toLocaleString()}</p>
                            </div>

                            {/* Stock Progress */}
                            <div className="">
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '70%' }}
                                        className="h-full bg-linear-to-r from-[#F94444] to-[#F94444]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div >
                </motion.div >
            ))}
        </div>
    );
}
