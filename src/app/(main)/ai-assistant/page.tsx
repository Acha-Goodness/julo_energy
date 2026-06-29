"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Breadcrumb from "../products/[id]/breadCrumb";
import julo from "@/assets/images/juloAI.svg";
import { manrope } from "@/lib/font";
import batery from "@/assets/images/battery-charging.svg";
import electricity from "@/assets/images/electricity.svg";
import driver from "@/assets/images/driver.svg";
import solar from "@/assets/images/solar.png";
import { VscSend } from "react-icons/vsc";

// Mock Data for Results Column
const products = Array(4).fill({
  title: "Fireman Inverter Combo 2.5kva + Lithium battery + Solar Panels",
  price: 14000,
  details: "Lithium - 120kwh, Inverter - 6kva, Solar panel - 650watt...",
  image: solar,
});

export default function Ai() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Breadcrumb />
      </div>
      <div className="w-[90%] md:w-[98%] lg:w-[90%] xl:w-[90%] mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row mt-5 gap-6 md:gap-2 lg:gap-6 xl:gap-6 mb-5">
        {/* LEFT COLUMN: AI Setup Panel */}
        <section className="w-full md:w-[65%] lg:w-[65%] xl:w-[65%] bg-white rounded-[10px] border border-[#EAEAEA] p-4 md:p-8 lg:p-8 xl:p-8 flex flex-col justify-between">
          {/* Branding & Subtitle */}
          <div className="text-center mt-4">
            <div className="flex justify-center items-center gap-1 mb-2">
              <Image src={julo} alt="logo" />
            </div>
            <p className={`${manrope.className} text-[#373737] text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] mx-auto`}>
              Let our Artificial Intelligence help you setup the perfect fit for your home and business place
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="mt-5 md:mt-0 lg:mt-0 xl:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-auto px-4">
              {/* Feature 1 */}
              <div className="text-center space-y-2 flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <Image src={batery} alt="img" />
                </div>
                <h3 className="font-semibold text-[11.87px] text-[#000000]">Consumption</h3>
                <p className="w-[200px] text-[9.23px] md:text-[8px] lg:text-[9.23px] xl:text-[9.23px] text-[#000000] bg-[#F9F9FA] p-2 rounded-[5.28px] mt-3 md:mt-0 lg:mt-0 xl:mt-0">
                  "State how long you want to keep your power on, and consumption rate"
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-2 flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <Image src={electricity} alt="img" />
                </div>
                <h3 className="font-semibold text-[11.87px] text-[#000000]">Duration</h3>
                <p className="w-[200px] text-[9.23px] md:text-[8px] lg:text-[9.23px] xl:text-[9.23px] text-[#000000] bg-[#F9F9FA] p-2 rounded-[5.28px] mt-3 md:mt-0 lg:mt-0 xl:mt-0">
                  "State how long you intend to leave power on during the day and night"
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-2 flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <Image src={driver} alt="img" />
                </div>
                <h3 className="font-semibold text-[11.87px] text-[#000000]">Power Options</h3>
                <p className="w-[200px] text-[9.23px] md:text-[8px] lg:text-[9.23px] xl:text-[9.23px] text-[#000000] bg-[#F9F9FA] p-2 rounded-[5.28px] mt-3 md:mt-0 lg:mt-0 xl:mt-0">
                  "We'll provide you with options to suit your budget and consumption"
                </p>
              </div>
            </div>
            <div className="mt-[8%] flex justify-center">
              <button className={`${manrope.className} bg-[#0C6170] text-white font-[500] text-[10.58px] py-2.5 px-8 rounded-full`}>
                Get Started
              </button>
            </div>
          </div>

          {/* Dynamic Interactive Call-to-Action Layer */}
          <div className="flex flex-col gap-6 items-center w-full mt-15 md:mt-0 lg:mt-0 xl:mt-0">
            {/* Chat Action bar */}
            <div className="w-full relative flex items-center">
              <input
                type="text"
                placeholder="Type message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-[0.46px] rounded-[14.81px] py-3.5 pl-4 pr-12 text-sm placeholder-gray-300 focus:outline-none focus:border-teal-700 transition-colors"
              />
              <button className="absolute right-4 text-teal-700 cursor-pointer">
                <VscSend size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: Results Section */}
        <section className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] bg-white rounded-[11.27px] border border-[#EAEAEA] p-3 md:p-6 lg:p-6 xl:p-6 flex flex-col">
          {/* Header Block */}
          <div className="mb-4 border-b border-[#EAEAEA] pb-5">
            <h2 className={`${manrope.className} text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-[600] text-[#0C6170]`}>Results</h2>
            <p className={`${manrope.className} text-[12px] text-[#979797]`}>Here is a result from your search</p>
          </div>

          {/* Filtering Dropdown Group */}
          <div className="flex justify-between gap-3 my-2 md:my-6 lg:my-6 xl:my-6">
            <button className="w-[164.33px] flex items-center justify-between border-[0.98px] border-[#E5E5E5] rounded-[3.91px] px-3 py-2 bg-white cursor-pointer">
              <span className={`${manrope.className} text-[13.68px]`}>Combo Type</span>
              <ChevronDown size={14} className="text-[#292D32]" />
            </button>
            <button className="w-[164.33px] flex items-center justify-between border-[0.98px] border-[#E5E5E5] rounded-[3.91px] px-3 py-2 bg-white cursor-pointer">
              <span className={`${manrope.className} text-[13.68px]`}>Sort by</span>
              <ChevronDown size={14} className="text-[#292D32]" />
            </button>
          </div>

          {/* Scrollable Container Window */}
          <div className="">
            {products.map((prod, index) => (
              <div key={index} className="flex gap-4 border-b border-[#F5F5F5] pb-4 cursor-pointer mt-4">
                {/* Product Card Graphic Cover */}
                <div className="w-[142.86px] h-[119.57px] md:h-[100px] lg:h-[119.57px] xl:h-[119.57px] bg-[#F9F9F9] flex items-center justify-center">
                  <Image
                    src={prod.image}
                    alt="Product bundle variant configuration"
                    className="object-contain h-[108.58px] md:h-[80px] lg:h-[108.58px] xl:h-[108.58px] w-[110.53px]"
                  />
                </div>

                {/* Description Content & Price Block */}
                <div className="flex flex-col w-[308px] justify-center">
                  <span className={`${manrope.className} text-[#0C6170] font-[600] text-[16px] mb-1`}>
                    ${prod.price.toLocaleString()}.00
                  </span>
                  <h4 className={`${manrope.className} text-[14px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-[500] text-[#212529] mb-1`}>
                    {prod.title}
                  </h4>
                  <p className={`${manrope.className} text-[12px] md:text-[10px] lg:text-[12px] xl:text-[12px] font-[500] text-[#868E96] mb-1`}>
                    {prod.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}