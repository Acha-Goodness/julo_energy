// components/AddAddressModal.tsx
"use client";

import DropDown from "./ui/dropdown-list";
import SortDropDown from '@/components/ui/sort-by';

interface ModalProps {
    setModalOpen: (value: boolean) => void;
    menus: string[];
    open: boolean;
    selected: string;
    setSelected: (value: string) => void;
    prodType: string;
    id?:string;
    setIsOpen?: (value: boolean) => void;
    option?:string;
}

export default function MobileDropModal({ setModalOpen, menus, open, selected, setSelected, prodType, id, setIsOpen, option }: ModalProps) {

    const closeModal = () => {
        setModalOpen(false)
        setIsOpen?.(false)
    }

    return (
        <div className="fixed flex items-end inset-0 z-50 bg-[#000000]/50 backdrop-blur-sm cursor-pointer"
            onClick={closeModal}
        >
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md">
                {
                    option !== "sortDrop" ?
                    <DropDown menus={menus} open={open} selected={selected} setSelected={setSelected} prodType={prodType} id="modal"/>
                         :
                    <SortDropDown menus={menus} open={open} selectedSort={selected} setSelectedSort={setSelected} id="modal"/>
                }
            </div>
        </div>
    );
}