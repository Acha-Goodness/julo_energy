'use client';

import { manrope } from '@/lib/font';
import { Button } from '@/components/ui/button';
import { Check } from "lucide-react";
import { payments } from '@/lib/static';

export const RepayDetails = () => {
    return (
        <div className='w-[375px]'>
            <h3 className={`${manrope.className} text-[20px] font-semibold text-[#0C6170] text-center md:text-start lg:text-start xl:text-start`}>Repayment</h3>
            <div className='w-full md:w-[295.83px] lg:w-[295.83px] xl:w-[295.83px]'>
                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col justify-center items-center w-[176.82px] md:w-[142.32px] lg:w-[142.32px] xl:w-[142.32px] h-[79.95px] border border-[#E2EDFF] rounded-[5px]'>
                            <p className={`${manrope.className} text-[11.19px] font-[500] text-[#000000]`}>Amount Paid</p>
                            <p className={`${manrope.className} font-bold text-[#0C6170] text-[16.79px]`}>$7,545.00</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[176.82px] md:w-[142.32px] lg:w-[142.32px] xl:w-[142.32px] h-[79.95px] border border-[#E2EDFF] rounded-[5px'>
                            <p className={`${manrope.className} text-[11.19px] font-[500] text-[#000000]`}>Unpaid</p>
                            <p className={`${manrope.className} font-bold text-[#0C6170] text-[16.79px]`}>$11,500.00</p>
                        </div>
                    </div>
                    <div className='border border-[#E2EDFF] rounded-[5px] mt-2 p-2'>
                        <div className='flex items-center gap-2'>
                            <div className='flex flex-col justify-center items-center w-[176.82px] md:w-[142.32px] lg:w-[142.32px] xl:w-[142.32px]'>
                                <p className={`${manrope.className} text-[11.19px] font-[500] text-[#000000]`}>Due Payment</p>
                                <p className={`${manrope.className} font-bold text-[#0C6170] text-[16.79px]`}>$1,256.50</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[176.82px] md:w-[142.32px] lg:w-[142.32px] xl:w-[142.32px]'>
                                <p className={`${manrope.className} text-[11.19px] font-[500] text-[#000000]`}>Due Date</p>
                                <p className={`${manrope.className} font-bold text-[#0C6170] text-[16.79px]`}>01/12/2025</p>
                            </div>
                        </div>
                        <Button className={`${manrope.className} bg-[#0C6170] w-full mt-5 rounded-[5px] text-[12.29px] font-semibold cursor-pointer`}>
                            Repay Now
                        </Button>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className={`${manrope.className} text-[11.99px] font-[500] text-[#000000]`}>Payment Plan</p>
                    <p className={`${manrope.className} text-[9.59px] text-[#000000]`}>This is the payment spread across 6 months</p>

                    <div className="w-full rounded-[3px] bg-[#F9F9F9] p-2 mt-3">
                        {/* Down Payment */}
                        <div className="mb-4 flex items-center justify-between">
                            <span className={`${manrope.className} text-[11.19px] text-[#6D6D6D]`}>Down Payment(25%)</span>

                            <span className={`${manrope.className} text-[11.19px] font-bold text-[#0C6170]`}>
                                $3,500.00
                            </span>
                        </div>

                        {/* Table Header */}
                        <div className="mb-4 flex items-center justify-between rounded-[3px] border border-gray-300 bg-white px-4 py-3">
                            <span className={`${manrope.className} text-[11.19px] text-[#000]`}>Months</span>
                            <span className={`${manrope.className} text-[11.19px] text-[#000]`}>Amount</span>
                        </div>

                        {/* Payment Rows */}
                        <div className="space-y-2">
                            {payments.map((payment) => (
                                <div
                                    key={payment.month}
                                    className="flex items-center justify-between"
                                >
                                    <span className={`${manrope.className} text-[11.19px] text-[#6D6D6D]`}>
                                        {payment.month}
                                    </span>

                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`${manrope.className} text-[11.19px] font-bold ${payment.status === "paid"
                                                ? "text-[#006d7c]"
                                                : payment.status === "pending"
                                                    ? "text-[#ff6b00]"
                                                    : "text-black"
                                                }`}
                                        >
                                            {payment.amount}
                                        </span>

                                        {payment.status === "paid" && (
                                            <div className="flex h-5 w-5 items-center justify-center rounded-full border-1 border-[#006d7c]">
                                                <Check
                                                    size={10}
                                                    className="text-[#006d7c]"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-3 border-t border-[#D7D7D7]" />

                        {/* Total */}
                        <div className="flex items-center justify-between">
                            <span className={`${manrope.className} text-[11.19px] font-bold text-[#6D6D6D]`}>
                                Total (6 Months)
                            </span>

                            <span className={`${manrope.className} text-[11.19px] font-bold text-[#000000]`}>
                                $14,000.00
                            </span>
                        </div>
                    </div>
                </div>
                <Button className={`${manrope.className} bg-white text-[#0C6170] w-full mt-4 rounded-[5px] text-[12.29px] font-semibold cursor-pointer border border-[#0C6170]`}>
                    Repay All ($6,450.54)
                </Button>
            </div>
        </div>
    )
}

