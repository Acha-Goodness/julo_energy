'use client';

import { ProductT } from "@/services/product.service";
import { manrope, gabarito } from "@/lib/font";
import { useRouter } from 'next/navigation';

interface ProdProps {
  prod?: ProductT;
}

export default function BuyNowCard({ prod }: ProdProps) {
  const router = useRouter();

  const navigateToPay = (prod?: ProductT) => {
    if (!prod) return null;
    router.push(
      `/pay-now?data=${encodeURIComponent(
        JSON.stringify(prod)
      )}&from=buy-now`
    );
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] p-6 border border-gray-100 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className={`${manrope.className} font-semibold text-[#0C6170] text-[19.46px] md:text-[18px] lg:text-[24px] xl:text-[24px]`}>Buy Now</h2>
          <p className="text-[12.39px] md:text-[8px] lg:text-[12px] xl:text-[14px] font-[500] text-[#B8B8B8]">Total cost of all items</p>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className={`${gabarito.className} text-[19.46px] md:text-[20px] lg:text-[22px] xl:text-[22px] font-semibold text-[#000000]`}>${(prod?.price ?? 0).toLocaleString()}.00</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`${gabarito.className} text-[12.39px] md:text-[12px] lg:text-[12px] xl:text-[14px] text-[#B8B8B8] line-through`}>$18,000.00</span>
            <span className={`${manrope.className} text-[9.23px] md:text-[8px] lg:text-[10px] text-white bg-[#3498DB] font-medium px-2 py-2 rounded`}>Save $4,000</span>
          </div>
        </div>
      </div>

      <button
        className={`${manrope.className} w-full bg-[#0C6170] text-white rounded-md py-3.5 font-[600] text-[16px] md:text-[10px] lg:text-[16px] xl:text-[16px] mt-2 cursor-pointer`}
        onClick={() => navigateToPay(prod)}
      >
        Buy Now
      </button>
    </div >
  );
}
