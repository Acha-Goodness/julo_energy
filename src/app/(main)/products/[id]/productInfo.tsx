'use client';

import { ProductT } from "@/services/product.service";
import { manrope } from '@/lib/font';

interface ProdProps {
  prod: ProductT;
}

export default function ProductInfo({ prod }: ProdProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Delivery Banner */}
      <div className="w-full bg-[#E7EFF1] py-4 px-4 flex justify-center items-center gap-2 text-[11px] lg:text-[14.91px] md:text-[14.91px] font-medium text-[#000000]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
        24hrs within Lagos | 2-3 Days Outside Lagos
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 text-sm text-gray-600 leading-relaxed mx-4">
        <h3 className={`${manrope.className} font-[600] text-[#000000] text-[14px]`}>Description</h3>
        <p className={`${manrope.className} text-[12px] text-[#272727]`}>{prod.description}</p>
      </div>

      {/* Combo Package */}
      <div className="flex flex-col gap-2 mx-4">
        <h3 className={`${manrope.className} font-[600] text-[#000000] text-[14px]`}>Combo Package</h3>
        <ul className={`${manrope.className} text-[12px] text-gray-600 list-none space-y-1.5`}>
          <li>Solar Panel - 400watts (x8)</li>
          <li>Inverter (Pure Sine Wave) - 5KVA (x1)</li>
          <li>Tubular Battery - 220ah (x4)</li>
          <li>Solar Charge Controller - 60A (x1)</li>
        </ul>
      </div>

      {/* Installation Kit */}
      <div className="flex flex-col gap-2 mx-4">
        <h3 className={`${manrope.className} font-[600] text-[#000000] text-[14px]`}>Installation Kit</h3>
        <ul className={`${manrope.className} text-[12px] text-gray-600 list-none space-y-1.5`}>
          <li>Cable - 10mm x 80yards</li>
          <li>Switch - 60amp x 2</li>
          <li>Battery Rack - 4 set x 2</li>
          <li>Changeover - 100amp x 4</li>
          <li>Timer Switch - 60amp x 2</li>
          <li>Solar Panel Mount</li>
        </ul>
      </div>
    </div>
  );
}
