"use client";

import { manrope } from '@/lib/font';

type DropMenuProps = {
    menus: string[];
    open: boolean;
    selectedSort: string;
    setSelectedSort: (value: string) => void;
    id?: string;
    setIsOpenSort?: (value: boolean) => void;
}

export default function SortDropDown({ menus, open, selectedSort, setSelectedSort, id, setIsOpenSort }: DropMenuProps) {
    return (
        <div className={`${id === "modal" ? "w-full rounded-0 bg-white text-black" : "rounded-[5px] absolute right-[20%] md:w-[17.5%] md:right-[5%] lg:w-[17.3%] xl:w-[10%] shadow-sm  bg-white overflow-hidden"}`}>
            {/* Dropdown List */}
            <div className={`overflow-y-auto transition-all ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className='px-5 py-3'>
                    <h1 className={`${manrope.className} font-[600] text-[16px]`}>Sort By</h1>
                </div>
                <ul className="flex flex-col">
                    {menus.map((menu) => (
                        <li key={menu} className="border-b border-gray-100 last:border-none">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedSort(menu);
                                    setIsOpenSort?.(false)
                                }}
                                className={`${manrope.className} w-full text-[14px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-[#000000] text-left px-6 h-[37px] transition-all
                                ${selectedSort === menu ? 'pl-2' : 'text-[#000000]'}
                            `}>
                                {menu}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}