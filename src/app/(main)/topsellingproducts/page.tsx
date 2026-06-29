'use client';

import { Suspense, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/productCard';
import { manrope } from "@/lib/font";
import { brandmenu, trendmenu, sormenu } from '@/lib/static';
import { Filters } from '@/components/filters';
import Image from 'next/image';
import headset from "@/assets/images/headset.svg"

function TopSellingProductsContent() {
    const [prodType, setProdType] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("All Batteries");
    const [isOpenSort, setIsOpenSort] = useState(false);
    const [isOpenBrand, setIsOpenBrand] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("All Batteries");
    const [selectedSort, setSelectedSort] = useState("All Batteries");

    const params = useParams();
    const searchParams = useSearchParams();
    const productId = params.id as string;
    const data = searchParams.get("data");
    const topProducts = data ? JSON.parse(data) : null;

    return (
        <div className='w-full bg-[#F2F2F2] h-[85vh]'>
            <div className='flex justify-between items-center bg-[#EBF1F2] text-white py-3 px-[5%] '>
                <div className='hidden md:flex lg:flex xl:flex items-center'>
                    <Image src={headset} alt="img" />
                    <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2 text-[#000000]`}>Help: 0906 710 8888</p>
                </div>
                <div className='flex items-center'>
                    <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2 text-[#000000]`}>Top Sellers</p>
                </div>
                <p className={`${manrope.className} text-[12px] md:text-[17px] lg:text-[17px] xl:text-[17px] text-[#000000]`}>Time Left: <span className={`font-bold`}>02h : 28m : 02s</span></p>
            </div>
            <div className={`bg-white w-full md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto mt-0 md:mt-3 lg:mt-3 xl:mt-3 p-3`}>
                <Filters
                    brandmenu={brandmenu}
                    dropmenu={trendmenu}
                    sortmenu={sormenu}
                    isOpen={isOpen}
                    isOpenSort={isOpenSort}
                    setIsOpen={setIsOpen}
                    selected={selected}
                    setSelected={setSelected}
                    selectedSort={selectedSort}
                    setSelectedSort={setSelectedSort}
                    setIsOpenSort={setIsOpenSort}
                    prodType={prodType}
                    setProdType={setProdType}
                    isOpenBrand={isOpenBrand}
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                    setIsOpenBrand={setIsOpenBrand}
                />
                <div className='bg-white'>
                    <ProductCard products={topProducts} />
                </div>
            </div>
        </div>
    );
}

export default function TopSellingProducts() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white p-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0C6170]"></div>
            </div>
        }>
            <TopSellingProductsContent />
        </Suspense>
    );
}
