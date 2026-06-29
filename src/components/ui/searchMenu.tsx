import { useState } from 'react';
import { manrope } from '@/lib/font';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { menus } from '@/lib/static';


interface SearchMenuProps {
    setOpenSrchMenu: (value: boolean) => void;
    setSrch: (value: string) => void;
    srch?: string;
    openSrchMenu?: boolean;
    setSrchId: (value: number) => void;
}

export const SearchMenu = ({ srch, setSrch, openSrchMenu, setOpenSrchMenu, setSrchId }: SearchMenuProps) => {
    const [title, setTitle] = useState<string>("");

    const handleSetSearch = (page: string, id: number) => {
        setSrch(page);
        setOpenSrchMenu(false);
        setSrchId(id);
    }

    return (
        <div
            className={`${openSrchMenu ? "max-h-[430px] p-5 overflow-y-auto" : "max-h-0 p-0"} w-[220px] md:w-[30%] lg:w-[25%] xl:w-[15%] absolute top-35 md:top-30 lg:top-30 xl:top-35 right-[20%] md:right-[43%] lg:right-[45%] xl:right-[49%] z-[100] bg-white rounded-[10px]
                        overflow-hidden transition-all duration-300 shadow-sm`}
        >
            <nav>
                <ul>
                    {
                        menus.map((menu, idx) => (
                            <div key={idx} className='flex items-center gap-2 mt-1 border-b border-[#F9F9F9] pb-3 pl-[5%] cursor-pointer'
                                onClick={() => handleSetSearch(menu.title, idx)}
                            >
                                <div className='bg-[#F9F9F9] w-[36.73px] h-[36.73px] flex items-center justify-center rounded-[7.06px]'>
                                    <Image src={menu.img} alt="alt" className='w-[16.74px] h-[24.92px]' />
                                </div>
                                <p className={`${manrope.className} ${menu.title === srch && "text-[#0C6170] font-bold"}`}>{menu.title}</p>
                            </div>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
