"use client";

import { manrope } from '@/lib/font';

type DropMenuProps = {
    menus: string[];
    open: boolean;
    selected: string;
    setSelected: (value: string) => void;
    prodType: string;
    id?:string;
}

export default function DropDown({ menus, open, selected, setSelected, prodType, id }: DropMenuProps) {

    console.log(id)
    console.log(open)

    return (
        <div className={`${id === "modal" ? "w-full rounded-0 bg-white text-black" : "w-[35%] rounded-[5px] absolute md:w-[17.3%] lg:w-[17.3%] xl:w-[10%] shadow-sm  bg-white overflow-hidden"}`}>
            {/* Dropdown List */}
            <div className={`overflow-y-auto transition-all ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className='px-5 py-3'>
                    <h1 className={`${manrope.className} font-[600] text-[16px]`}>{prodType}</h1>
                </div>
                <ul className="flex flex-col">
                    {menus.map((menu) => (
                        <li key={menu} className="border-b border-gray-100 last:border-none">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelected(menu)
                                }}
                                className={`${manrope.className} w-full text-[14px] md:text-[12px] md:truncate lg:text-[14px] xl:text-[14px] text-[#000000] text-left px-6 h-[37px] transition-all
                                ${selected === menu ? 'pl-2' : 'text-[#000000]'}
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