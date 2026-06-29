'use client';

import Image from "next/image";
import { ProductT } from "@/services/product.service";
import { manrope } from "@/lib/font";

interface ProdProps {
  prod: ProductT;
}

export default function ProductGallery({ prod }: ProdProps) {
  // We'll mimic the 6 thumbnails using the same image for now
  const thumbnails = Array(6).fill(prod?.image);

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-[10px]">
      {/* Main Image */}
      <div className="bg-[#fafafa] p-8 flex items-center justify-center border border-gray-100 w-full h-[257.94px] md:h-[300px] lg:h-[496px] xl:h-[496px]">
        <Image
          src={prod?.image}
          alt="img"
          className="object-contain p-8 w-[226.14px] w-[510px] w-[510px] w-[510px] h-[222.14px] md:h-[377px] lg:h-[377px] xl:h-[377px]"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-between items-center gap-2 pb-2">
        {thumbnails.map((src, index) => (
          <div key={index} className={`w-[59.88px] md:w-[115.14px] lg:w-[115.14px] xl:w-[115.14px] h-[47.09px] md:h-[50px] lg:h-[60px] xl:h-[92.11px] p-2 flex items-center justify-center cursor-pointer bg-[#fafafa] transition-all ${index === 0 ? 'border-primary shadow-sm' : 'border-gray-200 hover:border-gray-400'}`}>
            <Image src={src} alt={`Thumbnail ${index + 1}`} className="w-[41.96px] md:w-[80.69px] lg:w-[80.69px] xl:w-[80.69px] h-[41px] md:h-[30px] lg:h-[50px] xl:h-[80px]" />
          </div>
        ))}
      </div>
      {/* Title & Basics */}
      <div className="flex flex-col mx-2 lg:mx-4 md:m-4">
        <h1 className={`${manrope.className}text-[20px] font-semibold text-[#000000] md:mt-4 sm:mt-0`}>{prod.name}</h1>

        <div className="flex flex-wrap items-center gap-4">
          {/* Stars */}
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
              <div className="relative w-4 h-4">
                <svg className="absolute top-0 left-0 w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
            </div>
            <span className={`${manrope.className} font-semibold text-[#545454] font-[600] ml-1`}>{prod.rating}</span>
            <span className={`${manrope.className} text-[#B8B8B8] ml-1`}>{prod.reviewCount}k Reviews</span>
          </div>

          <div className="flex-1"></div>
          {/* Stock & Quantity */}
          <div className="flex items-center gap-4">
            <span className={`${manrope.className} flex items-center gap-1.5 text-[14px] text-[#000000]`}>
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              In stock
            </span>
            <div className="flex items-center border border-gray-300 rounded px-2 py-1 gap-4">
              <button className="text-gray-500 hover:text-black font-semibold text-lg leading-none">-</button>
              <span className="font-medium">{prod.stock}</span>
              <button className="text-gray-500 hover:text-black font-semibold text-lg leading-none">+</button>
            </div>
          </div>
        </div>

        {/* Hybrid Badge */}
        <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
          Hybrid
        </div>
      </div>
    </div>
  );
}
