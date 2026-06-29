'use client';

import { type ProductT } from '@/services/product.service';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { gabarito, manrope } from '@/lib/font';

interface ProdCardProps {
    products: ProductT[];
}

export function ProductCard({ products }: ProdCardProps) {
    const router = useRouter();
    const [addingToCart, setAddingToCart] = useState(false);

    const handleNavigate = (prod: ProductT) => {
        router.push(
            `/products/${prod.id}?data=${encodeURIComponent(
                JSON.stringify(prod)
            )}`
        );
    };

    return (
        <div className={`bg-[#fff] grid grid-cols-2  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row justify-between items-center gap-4 md:gap-2 lg:gap-3 xl:gap-5 bg-white p-2 md:p-5 lg:p-5 xl:p-5 ${products.length > 6 && "flex flex-wrap"}`}>
            {products.map((prod) => (
                <div key={prod.id} className={`w-full md:w-[18%] lg:w-[18%] xl:w-[18%] rounded-[10px] transition-all duration-500 group cursor-pointer ${products.length > 6 && "md:w-[calc(18%-1rem)] lg:w-[calc(17.3%-1rem)] xl:w-[calc(16.6%-1rem)]"} `}
                    onClick={() => handleNavigate(prod)}
                >
                    <div className="bg-[#F8F9FA] p-2 h-[23vh] md:h-[13vh] lg:h-[15vh] xl:h-[23vh]" >
                        {/* Badges */}
                        <div className="flex justify-end w-full" >
                            <p className={`${manrope.className} w-[45px] md:w-[35px] lg:w-[40px] bg-[#FFE2E2] px-1 text-[#E70000] text-[14px] md:text-[10px] lg:text-[14px] xl:text-[14px] font-medium rounded-[5px] uppercase`}>-15%</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                src={prod.image}
                                alt={prod.name}
                                className="md:w-[60%] lg:w-[60%] xl:w-[60%] object-contain"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="py-2" >
                        <div className="mb-[2%]">
                            <p className={`${manrope.className} text-[13.44px] md:text-[10px] lg:text-[13.44px] xl:text-[13.44px] text-[#272727] line-clamp-2`}>
                                {prod.name}
                            </p>
                        </div>

                        <div className="">
                            <div className="items-baseline mb-[4%]">
                                <p className={`${gabarito.className} text-[16px] md:text-[12px] lg:text-[16px] xl:text-[16px] font-[600] text-[#0C6170]`}>₦{prod.price.toLocaleString()}</p>
                                <p className={`${manrope.className} text-[10px] text-[#7D7D7D] line-through`}>N{(prod.price * 1.15).toLocaleString()}</p>
                            </div>
                        </div>
                    </div >
                </div>
            ))}
        </div>
    );
}
