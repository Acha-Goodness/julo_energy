'use client';

import Image from "next/image";
import { Business } from '@/services/product.service';
import { useRouter } from 'next/navigation';
import { manrope } from "@/lib/font";
import { products } from '@/lib/static';

interface BusinessListProps {
    business: Business[];
}

export function Businesses({ business }: BusinessListProps) {
    const router = useRouter();

    const handleNavigate = (id: string, name: string) => {
        // const slug = name.replace(/&/g, 'and').replace(/ /g, '-')
        router.push(
            `/buzzcategory/${id}/${name}/?data=${encodeURIComponent(
                JSON.stringify(products)
            )}`
        );
    };

    return (
        <section className="py-1 md:py-6 lg:py-6 xl:py-6 bg-white overflow-hidden border-b border-gray-50">
            <div className="px-4">
                <div className="flex md:flex-row lg:flex-row xl:flex-row gap-2 md:gap-1 lg:gap-3 xl:gap-3 items-center justify-between overflow-x-auto pb-4 no-scrollbar scroll-smooth">
                    {business.map((buzz) => {
                        return (
                            <div
                                key={buzz.id}
                                onClick={() => handleNavigate(buzz.id, buzz.name)}
                                className="flex flex-col items-center gap-4 cursor-pointer mt-5 md:mt-0 lg:mt-0 xl:mt-0 shrink-0 md:shrink lg:shrink xl:shrink"
                            >
                                <Image 
                                    src={buzz.image} 
                                    alt={buzz.name} 
                                    className="w-[112.53px] h-[154.91px] md:w-[300px] md:h-[150px] lg:w-[321px] lg:h-[200px] xl:w-[321px] xl:h-[318px]"
                                />
                                <span className={`${manrope.className} text-[9px] md:text-[10px] lg:text-[11.44px] xl:text-[13.44px] text-black text-center`}>
                                    {buzz.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
