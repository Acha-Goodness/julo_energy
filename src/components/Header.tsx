'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import julo from "../assets/images/julo.svg";
import { TbBatteryCharging } from "react-icons/tb";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { manrope } from '@/lib/font';
import headset from "@/assets/images/headset.svg";
import truck from "@/assets/images/truck-tick.svg";
import discount from "@/assets/images/discount.svg";
import electricity from "@/assets/images/electricity 2.svg";
import cart from "@/assets/images/shopping-cart.svg";
import delivery from "@/assets/images/delivery.svg";
import ai from "@/assets/images/ai.svg";
import { usePathname } from "next/navigation";
import { Menu } from '@/app/(main)/profile/menu';
import { SearchMenu } from './ui/searchMenu';


export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [srch, setSrch] = useState<string>("");
  const [normSrch, setNormSrch] = useState<string>("");
  const [srchId, setSrchId] = useState<number>();
  const [open, setOpen] = useState(false);
  const [openSrchMenu, setOpenSrchMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropSrchRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const excludedRoutes = [
    "/flashproducts",
    "/inverterproducts",
    "/recommproducts",
    "/solarproducts",
    "/topsellerproducts",
    "/topsellingproducts",
    "/batteryproducts",
    "/buzzcategory/[id]/[name]"
  ];

  const isExcluded =
    excludedRoutes.includes(pathname) ||
    /^\/buzzcategory\/[^/]+\/[^/]+/.test(pathname);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
      if (dropSrchRef.current && !dropSrchRef.current.contains(event.target as Node)) {
        setOpenSrchMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex flex-col bg-white">
      {/* Top Banner */}
      <div className=" lg:flex md:flex lg:justify-between md:justify-between items-center px-[2%] md:px-[2%] lg:px-[5%] xl:px-[5%] py-4 text-xs font-semibold text-gray-600 bg-[#F2F2F2]">
        <div className="flex items-center justify-center gap-2 font-[14] text-[#000000]">
          <Image src={delivery} alt="icon" />
          <span className={`${manrope.className} text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14.91px] font-[500] text-[#000000]`}>24hrs within Lagos | 2-3 Days Outside Lagos</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <TbBatteryCharging size={24} color='#0C6170' />
          <span className={`${manrope.className} text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14.91px] font-[500] text-[#000000]`}>Free Installation for purchase above N5m</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="lg:flex md:flex justify-between items-center px-[2%] md:px-[2%] lg:px-[5%] xl:px-[5%] py-4">
        <div className='flex lg:w-[60%] md:w-[60%] items-center'>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="flex items-center gap-1 cursor-pointer">
              <Image
                src={julo}
                alt="logo"
                className='w-[70px] h-[55px] md:w-[80px] md:h-[55px] lg:w-[103.44px] lg:h-[55px] xl:w-[103.44px] xl:h-[55px]'
              />
            </div>
          </Link>

          {/* Search Bar */}
          <div ref={dropSrchRef} className='w-[60%] md:max-w-full lg:max-w-[60%] xl:max-w-[60%] ml-3 lg:ml-12 md:ml-12 lg:mr-1 md:mr-1'>
            <div className="flex pr-1 items-center bg-[#EBF1F2] rounded-full">
              <svg className="w-5 h-5 text-[#98B0B4] ml-4 mr-2 hidden md:block lg:block xl:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" placeholder="Search" onChange={(e) => setNormSrch(e.target.value)} className="bg-transperent border-none outline-none flex-1 py-2 text-sm px-2 text-[#98B0B4] w-[20%]" />
              <button className={`${manrope.className} w-[40%] xl:w-[25%] px-1 justify-evenly flex items-center gap-1 md:px-3 lg:px-3 xl:px-3 py-2 md:my-1 lg:my-2 xl:my-2 md:mr-0 lg:mr-2 xl:mr-2 text-[12px] text-[#ffffff] bg-[#0C6170] rounded-full cursor-pointer`}
                onClick={() => setOpenSrchMenu(!openSrchMenu)}
              >
                <p className='truncate w-[100%]'>{srch || "All"}</p><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
            <SearchMenu
              setOpenSrchMenu={setOpenSrchMenu}
              openSrchMenu={openSrchMenu}
              setSrch={setSrch}
              srch={srch}
              setSrchId={setSrchId}
            />
          </div>
          <button className={`${manrope.className} w-[20%] bg-[#0C6170] text-white lg:px-8 ml-2 h-[40px] rounded-full text-[10px] md:text-[12px] lg:text-[12px] xl:text-[12px] font-medium cursor-pointer`}
            onClick={() => router.push(`/category/${srchId}?name=${encodeURIComponent(srch)}`)}
          >
            Search
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center justify-between gap-4 mt-4 lg:mt-0 md:mt-0">
          <div>
            <div className="flex bg-[#FFC300] w-[17px] h-[17px] justify-center items-center rounded-full absolute top-38 md:top-17.5 lg:top-17.5. xl:top-17.5">
              <h2 className={`${manrope.className} text-[11.77px] font-[800] text-[#000000]`}>0</h2>
            </div>
            <button className="flex items-center gap-1 text-[#0C6170] font-semibold text-[13.53px] cursor-pointer">
              <Image src={cart} alt="icon" />
              Cart
            </button>
          </div>

          <div ref={dropdownRef}>
            <button className="flex items-center gap-1 border border-[#0C6170] rounded-full px-4 py-2 md:py-1 lg:py-2 xl:py-2 text-[10px] lg:text-[14px] md:text-[14px] font-[800] text-[#0C6170] cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {!isLoggedIn ? "Login" : "Big Richie"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <Menu open={open} setOpen={setOpen} id="login" isLoggedIn={isLoggedIn} />
          </div>
          <Image
            src={ai}
            alt="ai"
            className='cursor-pointer'
            onClick={() => router.push('/ai-assistant')}
          />
        </div>
      </div>

      {/* Sub Navbar */}
      {
        !isExcluded
        &&
        <div className="flex flex-wrap md:flex lg:flex xl:flex justify-between items-center px-[2%] md:px-[2%] lg:px-[5%] xl:px-[5%] py-3 bg-[#e8f1f2] text-gray-800 font-medium border-b border-gray-200">
          <div className="flex items-center justify-center gap-2 cursor-pointer absolute md:static lg:static xl:static top-[32.7%]">
            <Image src={headset} alt="icon" />
            <span className={`${manrope.className} font-[500] text-[10px] lg:text-[13px] md:text-[10px]`}>Help: 0906 710 8888</span>
          </div>
          <div className="flex gap-15 md:flex lg:flex xl:flex items-center justify-between lg:gap-8 md:gap-4 mt-3 lg:mt-0 md:mt-0">
            <a href="#" className="flex items-center lg:gap-2 md:gap-2"
              onClick={() => router.push(`/profile?from=orders`)}
            >
              <Image src={truck} alt="icon" />
              <span className={`${manrope.className} font-[500] text-[10px] lg:text-[13px] md:text-[10px]`}>Track Order</span>
            </a>
            <a href="#" className="flex items-center lg:gap-2 md:gap-2"
              onClick={() => router.push(`/profile?from=pow-finan`)}
            >
              <Image src={discount} alt="icon" />
              <span className={`${manrope.className} font-[500] text-[10px] lg:text-[13px] md:text-[10px]`}>Power Financing</span>
            </a>
            <a href="#" className="flex items-center lg:gap-2 md:gap-2"
              onClick={() => router.push('/customization')}
            >
              <Image src={electricity} alt="icon" />
              <span className={`${manrope.className} font-[500] text-[10px] lg:text-[13px] md:text-[10px]`}>Customise Power</span>
            </a>
          </div>
          <div className="flex justify-center gap-2 items-center md:justify-between lg:justify-between xl:justify-between mt-3 lg:mt-0 md:mt-0 relative md:static lg:static xl:static left-[53%]">
            <span className={`${manrope.className} font-[500] text-gray-700 text-[10px] lg:text-[13px] md:text-[10px]`}>Repayment: <span className="text-[#0C6170] text-[10px] lg:text-[16px] md:text-[10px]">$1,256.50</span></span>
            <button className="bg-[#0C6170] text-white text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] px-5 py-1.5 rounded font-medium cursor-pointer">
              Pay Now
            </button>
          </div>
        </div>
      }
    </header >
  );
}
