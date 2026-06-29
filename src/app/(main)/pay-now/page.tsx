'use client';

import { Suspense, useState } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import ProductGallery from '../products/[id]/productGallery';
import { useSearchParams } from 'next/navigation';
import { lineItems } from '@/lib/static';
import Image from 'next/image';
import pen from "@/assets/images/pen.svg"
import bus from "@/assets/images/bus.svg"
import cancel from "@/assets/images/Vector.svg"
import { PaymentCard } from '@/components/paymentCard';
import { PowerFinancingCard } from '@/components/powerFinancingCard';
import Modal from '@/components/modal';
import { manrope, gabarito } from "@/lib/font";

type Address = {
    name: string;
    number: string;
    address: string;
};

function CheckoutPageContent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [displayAddModal, setDisAddModal] = useState(false);
    const [showPayCompletedModal, setShowPayCompletedModal] = useState(false)
    const [verifyModal, setVerifyModal] = useState(false);
    const [showIdentificationModal, setShowIdentificationModal] = useState(false);
    const [showFinancingModal, setShowFinancingModal] = useState(false);
    const [wantsInstallation, setWantsInstallation] = useState('Yes');

    const searchParams = useSearchParams();
    const data = searchParams.get("data");
    const product = data ? JSON.parse(data) : null;

    const from = searchParams.get('from')

    const address: Address[] = [
        {
            name: "Micheal Dike",
            number: "0801 000 0000",
            address: "3 Victoria Island, Eti-Osa, Lagos",
        },
        {
            name: "Big Richie",
            number: "0801 098 0064",
            address: "3 Mary Land, Ikeja, Lagos",
        },
    ]

    const handleAddAddress = () => {
        setModalOpen(true)
        setDisAddModal(true)
    }

    return (
        <div className='bg-[#F9F9F9] py-8'>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-start gap-4 md:gap-2 lg:gap-4 xl:gap-4 w-[95%] md:w-[98%] lg:w-[90%] xl:w-[90%] mx-auto'>
                <div className="space-y-6 w-full md:w-[48%] lg:w-[48%] xl:w-[48%]">
                    <div className='bg-white p-2 md:p-2 lg:p-6 xl:p-6 rounded-[10px] border-1 border-[#EAEAEA]'>
                        <header className="text-center space-y-1">
                            <h1 className={`${manrope.className} text-[#0C6170] text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] font-[600]`}>Confirmation</h1>
                            <p className={`${manrope.className} text-[#979797] text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-medium`}>This is the total cost of your purchase, delivery and installation</p>
                        </header>

                        {/* Summary Section */}
                        <section className='mt-10'>
                            <h2 className={`${manrope.className} font-[500] text-[15px] mb-4 text-[#000000]`}>Summary</h2>
                            <div className="bg-[#F9F9F9] p-6 rounded-[4px]">
                                <div className="space-y-3 pb-4 border-b border-[#D7D7D7]">
                                    {lineItems.map((item, i) => (
                                        <div key={i} className="flex justify-between text-[14px] md:text-[12px] lg:text-[14px] xl:text-[14px]">
                                            <span className={`${manrope.className} text-[#6D6D6D] truncate max-w-[70%]`}>{item.name}</span>
                                            <span className={`${manrope.className} text-[#000000] font-medium text-slate-900`}>${item.price.toLocaleString()}.00</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 space-y-2">
                                    <div className="flex justify-between">
                                        <span className={`${manrope.className} text-[14px] text-[#6D6D6D]`}>Delivery Fee</span>
                                        <span className={`${manrope.className} text-[14px] text-[#000000] font-[500]`}>$1,000.00</span>
                                    </div>
                                    <div className="flex justify-between pb-3 border-b border-[#D7D7D7]">
                                        <span className={`${manrope.className} text-[14px] text-[#6D6D6D]`}>VAT (7%)</span>
                                        <span className={`${manrope.className} text-[14px] text-[#000000] font-[500]`}>$700.00</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg pt-2 text-slate-900">
                                        <span className={`${manrope.className} text-[14px] font-bold`}>Total</span>
                                        <span className={`${manrope.className} text-[14px] font-bold`}>$31,700.00</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Delivery Address Section */}
                    <section className="bg-white rounded-xl p-2 md:p-2 lg:p-6 xl:p-6 border-1 border-[#EAEAEA]">
                        <div className="text-center mb-6">
                            <h2 className={`${manrope.className} font-[600] text-[18px] md:text-[16px] lg:text-[20px] xl:text-[20px] text-[#0C6170]`}>Delivery Address</h2>
                            <p className={`${manrope.className} text-[#979797] text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-[500]`}>What location do you want your package to be delivered</p>
                        </div>

                        <button className="w-full flex items-center justify-between p-4 bg-[#F9F9F9] mb-2 cursor-pointer"
                            onClick={handleAddAddress}
                        >
                            <div className="flex items-center gap-3">
                                <Image src={bus} alt="icon" />
                                <span className={`${manrope.className} text-[#212529] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[14px]`}>Add New Address</span>
                            </div>
                            <ChevronRight size={20} className="text-gray-400" />
                        </button>

                        <div className="space-y-1">
                            {
                                address.length === 0 ? (
                                    <div>Please enter an address</div>
                                ) : (
                                    address.map((add, i) => (
                                        <div key={i} className="flex items-start justify-between p-4 cursor-pointer">
                                            <div className="flex gap-4">
                                                <input type="radio" name="address" className="mt-1 accent-cyan-700 w-4 h-4" defaultChecked={i === 0} />
                                                <div>
                                                    <p className={`${manrope.className} text-[12px] text-[#495057]`}>{add.name} - {add.number}</p>
                                                    <p className={`${manrope.className} text-[14px] md:text-[12px] lg:text-[14px] xl:text-[14px]  font-semibold text-[#212529]`}>{add.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <Image src={pen} alt="icon" />
                                                <Image src={cancel} alt="icon" />
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </section>

                    <div className='bg-white p-2 md:p-2 lg:p-6 xl:p-6 pt-0 rounded-[10px] border-1 border-[#EAEAEA]'>
                        <div className="flex flex-col gap-4 pt-5 border-t border-gray-100">
                             <h2 className={`${manrope.className} font-semibold text-[20px] text-center text-[#0C6170]`}>Installation</h2>
                            <div className="flex justify-between items-start">
                            <div className="flex flex-col w-[60%]">
                                <span className={`${gabarito.className} text-[14px] text-[#000000]`}>Do you want Installation?</span>
                                <span className={`${manrope.className} text-[8px] lg:text-[12px] md:text-[10px] font-[500] text-[#979797] mt-1 w-[80%]`}>Our engineers will safe install at your location immediately after purchase</span>
                            </div>
                            <div className="flex items-center gap-4 border-[1px] border-[#EEEEEE] rounded-[7.5] px-4 py-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-[2px]">
                                    {wantsInstallation === 'Yes' && <div className="w-full h-full bg-primary rounded-full"></div>}
                                </div>
                                <input type="radio" name="installation-buy" className="hidden" checked={wantsInstallation === 'Yes'} onChange={() => setWantsInstallation('Yes')} />
                                <span className={`${gabarito.className} text-[#000000] text-[16.79px]`}>Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-[2px]">
                                    {wantsInstallation === 'No' && <div className="w-full h-full bg-primary rounded-full"></div>}
                                </div>
                                <input type="radio" name="installation-buy" className="hidden" checked={wantsInstallation === 'No'} onChange={() => setWantsInstallation('No')} />
                                <span className={`${gabarito.className} text-[#000000] text-[16.79px]`}>No</span>
                                </label>
                            </div>
                            </div>
                        </div>

                        {
                            wantsInstallation === 'Yes' && (
                            <div className="flex flex-col gap-2 mt-8">
                                <label className={`${gabarito.className} text-[#000000] text-[14px]`}>Installation Kits</label>
                                <div className="relative w-full">
                                <select className={`${gabarito.className} w-full appearance-none bg-[#F2F2F2] border border-gray-200 rounded-md py-3 px-4 text-[16.79px] text-[#000000] outline-none focus:border-primary`}>
                                    <option>Bungalow</option>
                                    <option>Duplex</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                                </div>
                            </div >
                            )
                        }
                    </div>

                    {/* Payment Section */}
                    <div>
                        {
                            from === "buy-now" ?
                                <PaymentCard
                                    from={from}
                                    isLoggedIn={isLoggedIn}
                                    setModalOpen={setModalOpen}
                                    address={address}
                                    setDisAddModal={setDisAddModal}
                                    setShowPayCompletedModal={setShowPayCompletedModal}
                                />
                                :
                                <PowerFinancingCard
                                    from={from}
                                    isLoggedIn={isLoggedIn}
                                    setModalOpen={setModalOpen}
                                    address={address}
                                    setDisAddModal={setDisAddModal}
                                    setShowPayCompletedModal={setShowPayCompletedModal}
                                    setShowIdentificationModal={setShowIdentificationModal}
                                />
                        }

                    </div>

                </div>
                <div className='w-full md:w-[51%] lg:w-[51%] xl:w-[51%]'>
                    <ProductGallery prod={product} />
                    <div className='bg-[#FFE97B] mt-3 py-3 text-center text-12 text-[#495057]'>
                        <p>Arrives by August 3 to August 9th</p>
                    </div>
                </div>
            </div>
            {modalOpen &&
                <Modal
                    setModalOpen={setModalOpen}
                    isLoggedIn={isLoggedIn}
                    displayAddModal={displayAddModal}
                    showPayCompletedModal={showPayCompletedModal}
                    setDisAddModal={setDisAddModal}
                    setShowPayCompletedModal={setShowPayCompletedModal}
                    verifyModal={verifyModal}
                    setVerifyModal={setVerifyModal}
                    setIsLoggedIn={setIsLoggedIn}
                    showIdentificationModal={showIdentificationModal}
                    from={from}
                    setShowIdentificationModal={setShowIdentificationModal}
                    showFinancingModal={showFinancingModal}
                    setShowFinancingModal={setShowFinancingModal}
                />
            }
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white p-4">
                <Loader2 className="h-10 w-10 animate-spin text-[#134e4a]" />
            </div>
        }>
            <CheckoutPageContent />
        </Suspense>
    );
}

