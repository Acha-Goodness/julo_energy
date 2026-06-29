"use client";

import { useState } from "react";
import { Battery, Cpu, Layers, Sun, Sliders, Wrench, Search, ChevronDown, Plus, Minus, Trash2 } from "lucide-react";
import { gabarito, manrope } from "@/lib/font";
import panel from "@/assets/images/spanel.png";
import Image from "next/image";
import CartPage from "../cart/page";

// Mock Data for Categories
const categories = [
    { id: "battery", name: "Battery", count: 2, icon: Battery },
    { id: "inverter", name: "Inverter", count: 1, icon: Cpu },
    { id: "rack", name: "Rack", count: 1, icon: Layers },
    { id: "solar", name: "Solar Panels", count: 4, icon: Sun, active: true },
    { id: "controller", name: "Charge Controller", count: 1, icon: Sliders },
    { id: "installation", name: "Installation", count: null, icon: Wrench },
];

// Mock Data for Filter Tags
const tags = ["All", "Tubular", "Dry-cell", "Lithium"];

// Mock Data for Products
const initialProducts = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "Roger 50,000mah power bank",
    price: 14000.0,
    originalPrice: 14000.0,
    image: panel, // Placeholder Solar Panel Image
}));

export default function PowerCustomisation() {
    const [selectedCategory, setSelectedCategory] = useState("solar");
    const [activeTag, setActiveTag] = useState("All");
    const [cart, setCart] = useState<{ [key: number]: number }>({ 4: 1, 8: 1 }); // Pre-selecting item 4 and 8 like in the screenshot

    const handleQuantityChange = (id: number, delta: number) => {
        setCart((prev) => {
            const currentQty = prev[id] || 0;
            const newQty = currentQty + delta;
            if (newQty <= 0) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: newQty };
        });
    };

    const handleRemove = (id: number) => {
        setCart((prev) => {
            const { [id]: _, ...rest } = prev;
            return rest;
        });
    };

    return (
        <div className="w-[100%] bg-[#F9F9F9] py-5 md:py-2 lg:py-2 xl:py-10 px-0 md:px-0 lg:px-0 xl:px-8">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-[93%] md:w-[98%] lg:w-[98%] xl:w-[93%] mx-auto gap-2">
                <div className="bg-white rounded-[10px] border border-[#EAEAEA] w-full md:w-[90%] lg:w-[65%] xl:w-[65%]">

                    <div className="text-center pt-8 pb-6 border-b border-gray-100">
                        <h1 className={`${manrope.className} text-[18px]  md:text-[18px] lg:text-[23px] xl:text-[23px] font-[600] text-[#0C6170]`}>Power Customisation</h1>
                        <p className={`${manrope.className} text-[#373737] text-[10px] md:text-[10px] lg:text-[14px] xl:text-[14px] mt-1`}>Customise your power - Select Items</p>


                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:flex flex-wrap justify-center gap-1 md:gap-3 lg:gap-3 xl:gap-3 w-[100%] md:w-[100%] lg:w-[100%] xl:w-[70%] mx-auto mt-6 px-2 md:px-4 lg:px-4 xl:px-4">
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                const isActive = selectedCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`flex items-center gap-2 px-2 md:px-2 lg:px-4 xl:px-4 py-2 rounded-[4px] border-1 transition-all ${isActive
                                            ? "border-teal-600 bg-teal-50/30 text-teal-800"
                                            : "border-gray-200 bg-white text-gray-600"
                                            }`}
                                    >
                                        <Plus className="w-4 h-4" />
                                        <span className={`${manrope.className} text-[10px] md:text-[10px] lg:text-[10px] xl:text-[14px]`}>{cat.name}</span>
                                        {cat.count !== null && (
                                            <span className={`text-xs text-gray-600 px-1.5 py-0.5 rounded-md font-normal`}>
                                                ({cat.count})
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- Sub-Category Title --- */}
                    <div className="text-center py-6">
                        <h2 className={`${manrope.className} text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] font-medium text-[#000000]`}>Solar Panels</h2>
                    </div>

                    {/* --- Filters & Search Bar --- */}
                    <div className="pb-6 space-y-4">
                        {/* Search Input */}
                        <div className="relative w-[80%] mx-auto">
                            <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#979797]" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-12 pr-4 py-3 border border-[#EAEAEA] rounded-[5px] focus:outline-none focus:ring-none focus:border text-[#979797] bg-white placeholder-[#979797]"
                            />
                        </div>

                        {/* Filter Toolbar */}
                        <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row flex-wrap justify-between items-center gap-10 w-[93%] mx-auto">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setActiveTag(tag)}
                                        className={`${manrope.className} px-5 py-2 rounded-[3.2px] text-[12px] border transition-all cursor-pointer ${activeTag === tag
                                            ? "bg-[#0C6170] text-white"
                                            : "bg-white border-[#E5E5E5] text-[#212529]"
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>

                            {/* Dropdowns */}
                            <div className="flex items-center justify-between gap-3 w-full md:w-full lg:w-[52%] xl:w-[52%]">
                                <button className={`${manrope.className} flex items-center justify-between w-36 px-4 py-2 border border-[#E5E5E5] rounded-[3.2px] bg-white text-[12px] text-[#212529]`}>
                                    <span>Select Brand</span>
                                    <ChevronDown className="w-4 h-4 text-[#292D32]" />
                                </button>
                                <button className={`${manrope.className} flex items-center justify-between w-36 px-4 py-2 border border-[#E5E5E5] rounded-[3.2px] bg-white text-[12px] text-[#212529]`}>
                                    <span>Sort by</span>
                                    <ChevronDown className="w-4 h-4 text-[#0C6170]" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- Product Grid --- */}
                    <div className="w-[93%] mx-auto pb-12">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:flex flex-wrap justify-between gap-2">
                            {initialProducts.map((product, index) => {
                                const quantity = cart[product.id] || 0;
                                const isSelected = quantity > 0;
                                // Mimicking the bottom row border configuration in screenshot
                                const isBottomRow = index >= 4;

                                return (
                                    <div
                                        key={product.id}
                                        className={`bg-[#FFF] rounded-[10px] flex flex-col justify-between transition-all w-full md:w-full lg:w-full xl:w-[23%] mt-4`}
                                    >
                                        {/* Product Image Container */}
                                        <div className="w-full h-[161px] bg-[#F9F9F9] flex items-center justify-center p-4 mb-4">
                                            <Image src={product.image} alt="img" />
                                        </div>

                                        {/* Product Details */}
                                        <div className="space-y-1">
                                            <p className={`${manrope.className} text-[11.86px] text-[#272727]`}>
                                                {product.name}
                                            </p>
                                            <div className="flex items-baseline gap-2">
                                                <span className={`${gabarito.className} text-[11.86px] font-[600] text-[#272727]`}>
                                                    ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                                </span>
                                                <span className={`${manrope.className} text-[11.86px] text-[#7D7D7D] line-through`}>
                                                    ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action Button/Controls */}
                                        <div className="mt-4 rounded-[1.81px]">
                                            {isSelected ? (
                                                <div className="flex items-center justify-between gap-2 w-full">
                                                    <button
                                                        onClick={() => handleRemove(product.id)}
                                                        className="flex items-center py-1 px-2 gap-1 border border-[#EEEFF0]"
                                                    >
                                                        <span className={`${manrope.className} font-[500] text-[10.89px] text-[#000000]`}>Remove</span>
                                                        <Trash2 className="w-4 h-4" color="#F94444" />
                                                    </button>
                                                    <div className="flex items-center gap-2 border border-[#E9E9E9] rounded-[1.63px] px-2 py-0.5">
                                                        <button
                                                            onClick={() => handleQuantityChange(product.id, -1)}
                                                            className="text-gray-500 hover:text-teal-600 p-1"
                                                        >
                                                            <Minus className="w-3 h-3" color="#0C6170" />
                                                        </button>
                                                        <span className="w-4 text-center font-medium text-gray-700 text-xs">
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => handleQuantityChange(product.id, 1)}
                                                            className="text-gray-500 hover:text-teal-600 p-1"
                                                        >
                                                            <Plus className="w-3 h-3" color="#0C6170" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => handleQuantityChange(product.id, 1)}
                                                    className="w-full py-1.5 flex items-center justify-center gap-1 border border-[#EEEFF0]"
                                                >
                                                    <span className={`${manrope.className} text-[10.89px] font-[500]`}>Add</span>
                                                    <Plus color="#0C6170" className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                <div className="w-full bg-white rounded-[10px] p-4 md:p-4 lg:p-6 xl:p-6 border border-[#EAEAEA] flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <div>
                        <h2 className={`${manrope.className} font-semibold text-[#0C6170] text-[16px] md:text-[16px] lg:text-[24px] xl:text-[22px]`}>Price</h2>
                        <p className="text-[10px] md:text-[10px] lg:text-[14px] xl:text-[14px] font-[500] text-[#B8B8B8]">Total cost of all items</p>
                        </div>
                        <div className="text-right flex flex-col items-end">
                        <p className={`${gabarito.className} text-[20px]  md:text-[20px] lg:text-[22px] xl:text-[27.99px] font-semibold text-[#000000]`}>$14,000.00</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className={`${gabarito.className} text-[10px] lg:text-[14px] md:text-[14px] text-[#B8B8B8] line-through`}>$18,000.00</span>
                            <span className={`${manrope.className} text-[8px] lg:text-xs md:text-xs text-white bg-[#3498DB] font-medium px-2 py-2 rounded`}>Save $4,000</span>
                        </div>
                        </div>
                    </div>

                    <button className={`${manrope.className} w-full bg-[#0C6170] text-white rounded-md py-3.5 md:py-3 lg:py-3.5 xl:py-3.5 font-[600] text-[16px] md:text-[13px] lg:text-[16px] xl:text-[16px] mt-2 cursor-pointer`}>
                        Add to Cart
                    </button>
                </div >
                    <CartPage />
                     <div className='bg-[#FFE97B] py-3 text-center text-[10px] md:text-[12px] lg:text-[12px] xl:text-[12px] text-[#495057]'>
                        <p>Your confirmation and eligibility will take only a few minutes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}