'use client';

import { manrope } from "@/lib/font";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";
import { cartItem } from "@/lib/static";

export default function Cart() {

    return (
        <div className="w-full bg-white rounded-[10px] p-4 md:p-2 lg:p-6 xl:p-6 border border-[#EAEAEA] flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className="text-[18px] md:text-[24px] lg:text-[24px] xl:text-[24px] font-[600] text-[#0C6170]">Carts</h2>
                    <p className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[500] text-[#979797]">Number of items ready for checkout</p>
                </div>
                <div className="flex bg-[#FFC300] w-[34px] h-[34px] justify-center items-center rounded-full">
                    <h2 className={`${manrope.className} text-[20px] font-[600] text-[#000000]`}>2</h2>
                </div>
            </div>
            <hr />


            <div className="">
                {
                    cartItem.map((item, idx) => (
                        <div key={idx}>
                            <div>
                                <h1 className={`${manrope.className} text-[15.31px] md:text-[15.31px] lg:text-[16.62px] xl:text-[16.62px] font-medium font-[500] pr-5`}>{item.name}</h1>
                                <p className={`${manrope.className} text-[12.89px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-[#868E96]`}>{item.sub}</p>
                            </div>
                            <div className="flex justify-between md:gap-2 lg:gap-0 xl:gap-0 items-center mt-4">
                                <div className="bg-[#F9F9F9] w-[168.99px] h-[162px] flex justify-center items-center">
                                    <Image src={item.img} alt="img" className="w-[139.93px] h-[137.45px]" />
                                </div>
                                <div className="flex justify-between items-center w-[45%] md:w-[45%] lg:w-[45%] xl:w-[35%]">
                                    <p className={`${manrope.className} text-[13.82px] md:text-[13.82px] lg:text-[15px] xl:text-[15px] text-[#212529] font-[500]`}>Quantity</p>
                                    <div>
                                        <p className={`${manrope.className} text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] text-[#212529] font-[600]`}>${item.price}.00</p>
                                        <div className="flex justify-evenly items-center border border-2 border-[#EEEFF0] p-1 my-2">
                                            <p className="text-[#3498DB] cursor-pointer">-</p>
                                            <p className={`${manrope.className} text-[13px] font-[500]`}>1</p>
                                            <p className="text-[#3498DB] cursor-pointer">+</p>
                                        </div>
                                        <div className="flex items-center justify-between border border-2 border-[#EEEFF0] p-1 cursor-pointer">
                                            <p className={`${manrope.className} text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] text-[#000000] font-[500]`}>Remove</p>
                                            <IoTrashOutline className="text-[#F94444]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-6 h-1 bg-[#F5F5F5] border-0" />
                        </div>
                    ))
                }
            </div>
            
            {/* <button className="w-full bg-[#0C6170] text-white text-[16px] font-semibold rounded-md py-3.5 font-medium shadow-sm mt-1">
                <p className={`${manrope.className} text-[16px] font-[600]`}>Checkout</p>
            </button> */}
        </div>

    );
}
