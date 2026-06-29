'use client';

import Image from "next/image";
import { Sponsor } from '@/services/product.service';
import { useRouter } from 'next/navigation';
import { manrope } from "@/lib/font";

interface SponsorsListProps {
    sponsors: Sponsor[];
}

export function SponsorsList({ sponsors }: SponsorsListProps) {
    const router = useRouter();

    return (
        <section className="pt-6 bg-white overflow-hidden border-b border-gray-50">
            <div className="max-w-[1440px] mx-auto px-0 md:px-6 lg:px-8 xl:px-8">
                <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
                    {sponsors.map((sponsor) => {
                        return (
                            <button
                                key={sponsor.id}
                                onClick={() => router.push(`/products?categoryId=${sponsor.id}`)}
                                className="flex flex-col items-center gap-4 shrink-0 group transition-all duration-300"
                            >
                                <div className="w-15 h-15 md:w-15 md:h-15 lg:w-20 xl:w-20 lg:h-20 xl:h-20 bg-white rounded-[1rem] flex items-center justify-center border border-{#F6F8F8} group-hover:-translate-y-2 transition-all duration-500 ease-out">
                                    <div className="relative">
                                        <Image src={sponsor.image} alt={sponsor.name} className="w-[40px] h-[50px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] xl:w-[55px] xl:h-[27px] object-contain" />
                                    </div>
                                </div>
                                <span className={`${manrope.className} text-[7.93px] md:text-[10px] lg:text-[14px] xl:text-[14px] text-[#000000] text-center`} >
                                    {sponsor.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}
