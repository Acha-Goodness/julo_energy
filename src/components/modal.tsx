// components/AddAddressModal.tsx
"use client";

import LoginForm from "@/app/(main)/auth/login/login";
import AddAddress from "./addAddress";
import VerifyForm from "@/app/(main)/auth/verify-email/verifyE";
import IdentificationForm from "@/app/(main)/auth/identification/indentification";
import FinancingForm from "@/app/(main)/auth/powerfinancing/financing";
import Submitted from "@/app/(main)/auth/submitted/submitted";


interface ModalProps {
    setModalOpen: (value: boolean) => void;
    isLoggedIn: boolean;
    displayAddModal: boolean;
    showPayCompletedModal: boolean;
    setDisAddModal: (value: boolean) => void;
    setShowPayCompletedModal: (value: boolean) => void;
    verifyModal: boolean;
    setVerifyModal: (value: boolean) => void;
    setIsLoggedIn: (value: boolean) => void;
    from: string | null;
    showIdentificationModal: boolean;
    setShowIdentificationModal: (value: boolean) => void;
    showFinancingModal: boolean;
    setShowFinancingModal: (value: boolean) => void;
}

export default function Modal({ setModalOpen, isLoggedIn, displayAddModal, showPayCompletedModal, setDisAddModal, setShowPayCompletedModal, verifyModal, setVerifyModal, setIsLoggedIn, from, showIdentificationModal, setShowIdentificationModal, showFinancingModal, setShowFinancingModal }: ModalProps) {

    const closeModal = () => {
        setModalOpen(false)
        setDisAddModal(false)
        setShowPayCompletedModal(false)
        setVerifyModal(false)
        setShowPayCompletedModal(false)
        setShowIdentificationModal(false)
        setShowFinancingModal(false)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/50 backdrop-blur-sm cursor-pointer"
            onClick={closeModal}
        >
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md px-5 md:px-0 lg:px-0 xl:px-0">
                {
                    displayAddModal ? (<AddAddress />)
                        :
                        showPayCompletedModal ? (<Submitted from={from} />)
                            :
                            !isLoggedIn ? (<LoginForm setVerifyModal={setVerifyModal} setIsLoggedIn={setIsLoggedIn} />)
                                :
                                verifyModal ? (<VerifyForm setShowPayCompletedModal={setShowPayCompletedModal} setVerifyModal={setVerifyModal} from={from} setShowIdentificationModal={setShowIdentificationModal} />)
                                    :
                                    showIdentificationModal ? (<IdentificationForm setShowIdentificationModal={setShowIdentificationModal} setShowFinancingModal={setShowFinancingModal} />)
                                        :
                                        showFinancingModal ? (<FinancingForm setShowFinancingModal={setShowFinancingModal} setShowPayCompletedModal={setShowPayCompletedModal} />) : null

                }
            </div>
        </div>
    );
}