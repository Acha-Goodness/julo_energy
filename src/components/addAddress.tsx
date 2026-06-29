'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { type AddressData } from '@/services/auth.service';
import { Button } from '@/components/ui/button';
import { manrope } from '@/lib/font';
import { ArrowLeft, ChevronDown } from "lucide-react";


export default function AddAddress() {
    const router = useRouter();
    const [formData, setFormData] = useState<AddressData>({
        name: '',
        phoneNumber: '',
        address: '',
        localGovernment: ''
    });

    const searchParams = useSearchParams()
    const from = searchParams.get('from')

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-6 mx-auto">
            {/* Header */}
            <div className="mb-4 md:mb-6 lg:mb-6 xl:mb-6 flex items-center justify-center relative">
                <button className="absolute left-0 text-gray-600 hover:text-black">
                    <ArrowLeft size={22} />
                </button>

                <h2 className={`${manrope.className} text-[18.18px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-semibold text-[#0C6170]`}>
                    Add Address
                </h2>
            </div>

            {/* Receiver Information */}
            <div className="mb-3 md:mb-6 lg:mb-6 xl:mb-6">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-1 border-[#0C6170] text-[13.5px] font-semibold text-[#0C6170]">
                        1
                    </div>

                    <h3 className={`${manrope.className} text-[14.54px] md:text-[16px] lg:text-[16px] xl:text-[16px] font-medium text-[#212529]`}>
                        Receiver Information
                    </h3>
                </div>

                <div className="space-y-3">
                    <InputField label="Full Name" value="Big Richie" />
                    <InputField label="Phone Number" value="09060007000" />
                </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-4 md:mb-8 lg:mb-8 xl:mb-8">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-1 border-[#0C6170] text-[13.5px] font-semibold text-[#0C6170]">
                        2
                    </div>

                    <h3 className={`${manrope.className} text-[16px] font-medium text-[#212529]`}>
                        Delivery Address
                    </h3>
                </div>

                <div className="space-y-3">
                    <InputField
                        label="Address"
                        value="25 Big Richie Boulevard, Banana Island Ikoyi"
                    />

                    <SelectField label="State" value="Lagos" />

                    <InputField label="Local Government" value="Eti-Osa" />

                    <SelectField label="City" value="Ikoyi" />
                </div>
            </div>

            {/* Button */}
            <Button className="w-full rounded-[5px] bg-[#0C6170] py-4 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] font-medium text-white cursor-pointer">
                Pay Now
            </Button >
        </div>
    );
}

function InputField({label, value}:{label: string; value: string}) {
    return (
        <div className="rounded-[4px] border border-[#E5E5E5] px-4 py-3">
            <label className={`${manrope.className} mb-1 block text-[10px] md:text-[11px] lg:text-[11px] xl:text-[11px] text-[#868E96] font-[500]`}>{label}</label>
            <input
                type="text"
                defaultValue={value}
                className={`${manrope.className} mb-1 block text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-[#000000]`}
            />
        </div>
    );
}

function SelectField({label, value}:{label: string; value: string}) {
    return (
        <div className="flex items-center justify-between rounded-[4px] border border-[#E5E5E5] px-4 py-3">
            <div className="w-full">
                <label className={`${manrope.className} mb-1 block text-[10px] md:text-[12px] lg:text-[12px] xl:text-[12px] text-[#868E96]`}>{label}</label>
                <select className={`${manrope.className} w-full appearance-none bg-transparent text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-[#000000] outline-none`}>
                    <option>{value}</option>
                </select>
            </div>

            <ChevronDown className="text-teal-700" size={20} />
        </div>
    );
}
