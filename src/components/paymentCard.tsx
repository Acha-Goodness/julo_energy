
import paystack from "@/assets/images/paystack.png";
import cards from "@/assets/images/cards.png";
import { Button } from '@/components/ui/button';
import { manrope } from '@/lib/font';
import Image from 'next/image';
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
}

export const PaymentCard = ({ from, isLoggedIn, setModalOpen, address, setDisAddModal, setShowPayCompletedModal }: FromProps) => {

    const handleLogin = () => {
        setModalOpen(true)
    };

    const navigate = () => {
        setModalOpen(true)
        if (address.length === 0) setDisAddModal(true)
        setShowPayCompletedModal(true)
    };

    const router = useRouter();
    return (
        <section className="bg-white rounded-[10px] p-2 md:p-2 lg:p-8 xl:p-8 border-1 border-[#EAEAEA]">
            <div className="text-center mb-6">
                <h2 className={`${manrope.className} font-semibold text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] text-[#0C6170]`}>Payment</h2>
                <p className={`${manrope.className} text-[#979797] text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-[500]`}>Complete payment</p>
            </div>

            <div className="border border-[#E5E5E5] rounded-[5px] p-4 bg-[#F9F9F9]">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[#212529] text-[12px] font-medium">Pay Direct</span>
                    <Image src={paystack} alt="img" width={101} />
                </div>
                <div className="bg-white p-4 border rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-4 border-cyan-800 bg-white"></div>
                        <Image src={cards} alt="card" width={120} />
                    </div>
                    <div className="text-right text-[10px] text-gray-400 leading-tight">
                        Card payments, <br /> Bank Transfer Options
                    </div>
                </div>
                <Button className='w-full bg-[#0C6170] rounded-[10px] mt-8 cursor-pointer'
                    onClick={() => !isLoggedIn ? handleLogin() : navigate()}
                >
                    Pay Now
                </Button>
            </div>
        </section >
    )
}
