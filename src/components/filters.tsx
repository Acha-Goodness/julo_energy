
import SortDropDown from '@/components/ui/sort-by';
import DropDown from '@/components/ui/dropdown-list';
import { IoChevronDown } from "react-icons/io5";
import { manrope } from "@/lib/font";
import MobileDropModal from './mobileDropModal';
import { useState, useRef, useEffect } from 'react';

interface MenuProps {
    dropmenu: string[];
    sortmenu: string[];
    brandmenu: string[];
    isOpen: boolean;
    isOpenSort: boolean;
    setIsOpen: (value: boolean) => void;
    selected: string;
    setSelected: (value: string) => void;
    selectedSort: string;
    setSelectedSort: (value: string) => void;
    setIsOpenSort: (value: boolean) => void;
    prodType: string;
    setProdType: (value: string) => void;
    isOpenBrand: boolean;
    selectedBrand: string;
    setSelectedBrand: (value: string) => void;
    setIsOpenBrand: (value: boolean) => void;
}

export const Filters = ({ dropmenu, sortmenu, brandmenu, isOpen, isOpenSort, setIsOpen, selected, setSelected, selectedSort, setSelectedSort, setIsOpenSort, prodType, isOpenBrand, selectedBrand, setSelectedBrand, setIsOpenBrand }: MenuProps) => {
    const [BmodalOpen, setBModalOpen] = useState(false)
    const [RmodalOpen, setRModalOpen] = useState(false)
    const [SmodalOpen, setSModalOpen] = useState(false)

    const dropBRef = useRef<HTMLDivElement | null>(null);
    const dropReRef = useRef<HTMLDivElement | null>(null);
    const dropSortRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropBRef.current && !dropBRef.current.contains(event.target as Node)){
                setIsOpenBrand(false);
            }

            if (dropReRef.current && !dropReRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }

            if (dropSortRef.current && !dropSortRef.current.contains(event.target as Node)){
                setIsOpenSort(false);
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between mb-6 w-[97%] mx-auto">
            <div ref={dropBRef}>
                <div className={`${manrope.className} flex gap-2 items-center border border-1 border-grey px-2 py-1 text-[13px] cursor-pointer`}
                    onClick={() => {
                        setIsOpenBrand(!isOpenBrand)
                        setIsOpenSort(false)
                        setIsOpen(false)
                        setBModalOpen(!BmodalOpen)
                    }}
                >
                    Brand
                    <IoChevronDown />
                </div>
                <div className='hidden md:block lg:block xl:block'>
                    <DropDown menus={brandmenu} open={isOpenBrand} selected={selectedBrand} setSelected={setSelectedBrand} prodType={prodType} id="Brand"/>
                </div>
                <div className='md:hidden lg:hidden xl:hidden'>
                {
                    BmodalOpen &&  <MobileDropModal setModalOpen={setBModalOpen} menus={brandmenu} open={isOpenBrand} selected={selectedBrand} setSelected={setSelectedBrand} prodType={prodType} setIsOpen={setIsOpenBrand}/>
                }
                </div>
               
            </div>
            <div className="flex gap-2">
                <div ref={dropReRef}>
                    <div className={`${manrope.className} flex gap-2 items-center border border-1 border-grey px-2 py-1 text-[13px] cursor-pointer`}
                        onClick={() => {
                            setIsOpen(!isOpen)
                            setIsOpenSort(false)
                            setIsOpenBrand(false)
                            setRModalOpen(!RmodalOpen)
                        }}
                    >
                        Recommended
                        <IoChevronDown />
                    </div>
                     <div className='hidden md:block lg:block xl:block'>
                        <DropDown menus={dropmenu} open={isOpen} selected={selected} setSelected={setSelected} prodType={prodType} />
                    </div>
                    <div className='md:hidden lg:hidden xl:hidden'>
                    {
                        RmodalOpen &&  <MobileDropModal setModalOpen={setRModalOpen} menus={dropmenu} open={isOpen} selected={selected} setSelected={setSelected} prodType={prodType} setIsOpen={setIsOpen}/>
                    }
                    </div>
                </div>
                <div ref={dropSortRef}>
                    <div className={`${manrope.className} flex gap-2 items-center border border-1 border-grey px-2 py-1 text-[13px] cursor-pointer`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpenSort(!isOpenSort)
                            setIsOpen(false)
                            setIsOpenBrand(false)
                            setSModalOpen(!SmodalOpen)
                        }}
                    >
                        Sort by
                        <IoChevronDown />
                    </div>
                        <div className='hidden md:block lg:block xl:block'>
                            <SortDropDown menus={sortmenu} open={isOpenSort} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
                       </div>
                        <div className='md:hidden lg:hidden xl:hidden'>
                       {
                        SmodalOpen &&  <MobileDropModal setModalOpen={setSModalOpen} menus={sortmenu} open={isOpenSort} selected={selectedSort} setSelected={setSelectedSort} prodType={prodType} setIsOpen={setIsOpenSort} option="sortDrop"/>
                       }   
                       </div>
                </div>
            </div>
        </div>
    )
}
