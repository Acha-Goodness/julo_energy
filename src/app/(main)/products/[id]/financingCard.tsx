'use client';
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { gabarito, manrope } from '@/lib/font';
import { useRouter } from 'next/navigation';
import { ProductT } from "@/services/product.service";

type FinancingCardProps = {
  pathname?: string;
  prod?: ProductT
  id?: number;
  navigate?: () => void;
}

export default function FinancingCard({ pathname, prod, id, navigate }: FinancingCardProps) {
  const router = useRouter();
  const [wantsInstallation, setWantsInstallation] = useState('Yes');
  const [duration, setDuration] = useState(12);
  const [downPayment, setDownPayment] = useState(150000);
  const [monthlyIncome, setMonthlyIncome] = useState(500000);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const calculateProgress = (val: number, max: number) => `${(val / max) * 100}%`;


  const navigateToPay = (prod?: ProductT) => {
    router.push(
      `/pay-now?data=${encodeURIComponent(
        JSON.stringify(prod)
      )}&from=financing`
    );
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] p-6 md:p-3 lg:p-6 xl:p-6 border border-gray-100 flex flex-col gap-2">
      <div className={`flex mb-4 ${pathname ? 'justify-between items-center' : 'flex-col'} `}>
        {pathname ? <IoIosArrowRoundBack size={34} /> : null}
        <div className={`${pathname && 'text-center'} `}>
          <h2 className={`${manrope.className} ${pathname ? "text-[20px]" : "text-[24px]"} font-[600] text-[#0C6170]`}>Power Financing</h2>
          <p className={`${manrope.className} text-[12.39px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[500] text-[#979797]`}>Buy Now, Pay Later</p>
        </div>
        {pathname && <div></div>}
      </div>

      <div className="flex flex-col border-t border-gray-100 pt-3">
        <p className={`${gabarito.className} text-[24.76px] md:text-[27.99px] lg:text-[27.99px] xl:text-[27.99px] font-[600] text-[#000000]`}>$14,000.00</p>
        <p className={`${gabarito.className} text-[14.86px] md:text-[16.79px] lg:text-[16.79px] xl:text-[16.79px] text-[#0C6170]`}>Pay $8,000 Now</p>
      </div>

      <div className="flex flex-col gap-4 pt-2">
        <div className="flex justify-between items-center md:flex-col lg:flex-col xl:flex-row md:items-start xl:items-center xl:items-center">
          <div className="flex flex-col w-[60%] md:w-full">
            <span className={`${gabarito.className} text-[12.39px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-[#000000]`}>Do you want Installation?</span>
            <span className={`${manrope.className} text-[8px] lg:text-[12px] md:text-[12px] font-[500] text-[#979797] w-[80%]`}>Our engineers will safe install at your location immediately after purchase</span>
          </div>
          <div className="flex items-center gap-4 border-[1px] border-[#EEEEEE] rounded-[7.5] p-4 md:p-6 lg:p-6 xl:p-6 md:mt-4">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-[2px]">
                {wantsInstallation === 'Yes' && <div className="w-full h-full bg-primary rounded-full"></div>}
              </div>
              <input type="radio" name="installation-fin" className="hidden" checked={wantsInstallation === 'Yes'} onChange={() => setWantsInstallation('Yes')} />
              <span className={`${gabarito.className} text-[#000000] text-[16.79px]`}>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-[2px]">
                {wantsInstallation === 'No' && <div className="w-full h-full bg-primary rounded-full"></div>}
              </div>
              <input type="radio" name="installation-fin" className="hidden" checked={wantsInstallation === 'No'} onChange={() => setWantsInstallation('No')} />
              <span className={`${gabarito.className} text-[#000000] text-[16.79px]`}>No</span>
            </label>
          </div>
        </div>
      </div>

      {wantsInstallation === 'Yes' && (
        <div className="flex flex-col gap-1">
          <label className={`${gabarito.className} text-[12.39px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-[#000000]`}>Installation Kits</label>
          <div className="relative w-full">
            <select className={`${gabarito.className} w-full appearance-none bg-[#E7E7E7] border border-gray-200 rounded-md py-3 px-4 text-[14.86px] md:text-[13px] lg:text-[16.79px] xl:text-[16.79px] text-[#000000] outline-none`}>
              <option>Bungalow</option>
              <option>Duplex</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
      )
      }

      {/* Sliders */}
      <div className="flex flex-col">
        {/* Repayment Duration */}
        <div className="flex flex-col mt-5">
          <div className="flex justify-between mb-2">
            <span className={`${gabarito.className} text-[#000000] text-[12.39px] md:text-[12px] lg:text-[14px] xl:text-[14px]`}>Repayment Duration</span>
            <span className={`${gabarito.className} text-[#0C6170] text-[13.27px] md:text-[13px] lg:text-[15px] xl:text-[15px] font-[600]`}>{duration} Months</span>
          </div>
          <div className="relative w-full h-2 rounded-full bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: calculateProgress(duration, 24) }}></div>
            <input type="range" min="1" max="24" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="absolute top-0 w-full opacity-0 cursor-pointer" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-md border-2 border-white cursor-pointer pointer-events-none" style={{ left: `calc(${calculateProgress(duration, 24)} - 8px)` }}></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className={`${gabarito.className} text-[10.62px] md:text-[10px] lg:text-[12px] xl:text-[12px] text-[#818181]`}>Max 24 Months</span>
          </div>
        </div>

        {/* Down Payment */}
        <div className="flex flex-col mt-3 md:mt-3 lg:mt-3 xl:mt-0">
          <div className="flex justify-between mb-2">
            <span className={`${gabarito.className} text-[#000000] text-[12.39px] md:text-[12px] lg:text-[14px] xl:text-[14px]`}>Down Payment (optional)</span>
            <span className={`${gabarito.className} text-[#0C6170] font-[600] text-[13.27px] md:text-[13px] lg:text-[15px] xl:text-[15px]`}>N{downPayment.toLocaleString()}</span>
          </div>
          <div className="relative w-full h-2 rounded-full bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: calculateProgress(downPayment, 500000) }}></div>
            <input type="range" min="0" max="500000" step="50000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="absolute top-0 w-full opacity-0 cursor-pointer" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-md border-2 border-white cursor-pointer pointer-events-none" style={{ left: `calc(${calculateProgress(downPayment, 500000)} - 8px)` }}></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className={`${gabarito.className} text-[10.62px] md:text-[10px] lg:text-[12px] xl:text-[12px] text-[#818181]`}>Max 50%</span>
          </div>
        </div>

        {/* Estimated Monthly Income */}
        <div className="flex flex-col mt-3 md:mt-3 lg:mt-3 xl:mt-0">
          <div className="flex justify-between mb-2">
            <span className={`${gabarito.className} text-[#000000] text-[12.39px] md:text-[12px] lg:text-[14px] xl:text-[14px]`}>Estimated Monthly Income (optional)</span>
            <span className={`${gabarito.className} text-[#0C6170] font-[600] text-[13.27px] md:text-[13px] lg:text-[15px] xl:text-[15px]`}>N{monthlyIncome.toLocaleString()}</span>
          </div>
          <div className="relative w-full h-2 rounded-full bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: calculateProgress(monthlyIncome, 10000000) }}></div>
            <input type="range" min="100000" max="10000000" step="100000" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} className="absolute top-0 w-full opacity-0 cursor-pointer" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-md border-2 border-white cursor-pointer pointer-events-none" style={{ left: `calc(${calculateProgress(monthlyIncome, 10000000)} - 8px)` }}></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className={`${gabarito.className} text-[10.62px] md:text-[10px] lg:text-[12px] xl:text-[12px] text-[#818181]`}>N10m+</span>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="border border-gray-100 rounded-lg p-5 flex flex-col gap-3 mt-3">
        <div className="flex justify-between">
          <span className={`${manrope.className} text-[12px] md:text-[10px] lg:text-[12px] xl:text-[12px] text-[#000000]`}>Principal Amount (without down payment)</span>
          <span className={`${gabarito.className} font-[600] text-[#0C6170] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[14px]`}>N500,000</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-4">
          <span className={`${manrope.className} text-[12px]`}>Total Interest (15% APR)</span>
          <span className={`${gabarito.className} font-[600] text-[#0C6170] text-[14px]`}>N0.0</span>
        </div>
        <div className="flex justify-between pt-2 items-center">
          <span className={`${manrope.className} text-[#000000] text-[12px]`}>Estimate Monthly</span>
          <span className={`${gabarito.className} text-[21px] md:text-[16px] lg:text-[21px] xl:text-[21px] font-[600] text-[#0C6170]`}>N500,000</span>
        </div>
      </div>

      <button className={`${manrope.className} w-full bg-[#0C6170] text-white text-[16px] font-semibold rounded-md py-3.5 font-medium shadow-sm mt-1 cursor-pointer`}
        onClick={() => id ? navigate?.() : navigateToPay(prod)}
      >
        Start Application
      </button>
    </div >
  );
}
