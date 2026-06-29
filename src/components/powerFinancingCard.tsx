

import { Button } from '@/components/ui/button';
import { gabarito, manrope } from '@/lib/font';
import { useRouter } from 'next/navigation';

type Address = {
    name: string;
    number: string;
    address: string;
}

interface FromProps {
    from: string | null;
    isLoggedIn: boolean;
    setModalOpen: (value: boolean) => void;
    address: Address[];
    setDisAddModal: (value: boolean) => void;
    setShowPayCompletedModal: (value: boolean) => void;
    setShowIdentificationModal: (value: boolean) => void;
}

export const PowerFinancingCard = ({ from, isLoggedIn, setModalOpen, address, setDisAddModal, setShowPayCompletedModal, setShowIdentificationModal }: FromProps) => {

    const handleLogin = () => {
        setModalOpen(true)
    };

    const navigate = () => {
        setModalOpen(true)
        if (address.length === 0) setDisAddModal(true)
        else setShowIdentificationModal(true)
    };

    const router = useRouter();
    return (
        <section className="bg-white rounded-[10px] p-2 md:p-2 lg:p-4 xl:p-4 border-1 border-[#EAEAEA]">
            <div className="text-center mb-6">
                <h2 className={`${manrope.className} font-semibold text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] text-[#0C6170]`}>Power Financing</h2>
                <p className={`${manrope.className} text-[#979797] text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[500]`}>Complete payment</p>
            </div>

            <div className="border border-[#E5E5E5] rounded-[5px] p-4 bg-[#F9F9F9]">
                <div className="flex justify-between items-center mb-2">
                    <p className={`${manrope.className} text-[#000000] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[16px]`}>Principal Amount (without down payment)</p>
                    <p className={`${gabarito.className} text-[#0C6170] text-[14px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-[600]`}>N500,000</p>
                </div>
                <div className="flex justify-between items-center mb-10">
                    <p className={`${manrope.className} text-[#000000] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[16px]`}>Total Interest (15% APR)</p>
                    <p className={`${gabarito.className} text-[#0C6170] text-[14px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-[600]`}>N0.0</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className={`${manrope.className} text-[#000000] text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px]`}>Estimate Monthly</p>
                    <p className={`${gabarito.className} text-[#0C6170] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-[600]`}>N500,000</p>
                </div>
            </div>
            <Button className='w-full bg-[#0C6170] rounded-[10px] mt-5 cursor-pointer'
                onClick={() => !isLoggedIn ? handleLogin() : navigate()}
            >
                Submit Application
            </Button>
        </section>
    )
}
