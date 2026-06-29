"use client";

import { Button } from "@/components/ui/button";
import { manrope } from "@/lib/font";

type Step = {
    title: string;
    date: string;
    completed: boolean;
    active?: boolean;
};

const steps: Step[] = [
    {
        title: "Order Placed",
        date: "21 August, 2025",
        completed: true,
        active: true,
    },
    {
        title: "Processing",
        date: "22 August, 2025",
        completed: true,
    },
    {
        title: "Shipped",
        date: "23 August, 2025",
        completed: false,
    },
    {
        title: "Delivered",
        date: "24 August, 2025",
        completed: false,
    },
    {
        title: "Installed",
        date: "25 August, 2025",
        completed: false,
    },
];

export default function OrderTimeline() {
    return (
        <main className="bg-white">
            <div className="bg-white py-5 rounded-xl">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[8px] top-0 h-[90%] w-[8px] bg-[#E7EFF1] rounded-full" />

                    <div className="flex flex-col gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-start gap-4">
                                {/* Circle */}
                                <div
                                    className={`z-10 h-6 w-6 rounded-full border-4 ${step.completed
                                        ? "bg-[#0C6170] border-[#E7EFF1]"
                                        : "bg-[#E7EFF1] border-[#E7EFF1]"
                                        }`}
                                />

                                {/* Content */}
                                <div>
                                    <h3
                                        className={`${manrope.className} text-[16px] font-[600] ${step.active ? "text-[#0C6170]" : "text-[#000000]"
                                            }`}
                                    >
                                        {step.title}
                                    </h3>

                                    <p className={`${manrope.className} text-[14px] text-[#818181] mt-1`}>{step.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Button className={`${manrope.className} w-full bg-white text-[#0C6170] text-[15px] font-[600] border border-[#E5E5E5] border-1 rounded-[3px] py-6`}>
                Cancel Order
            </Button>
        </main>
    );
}