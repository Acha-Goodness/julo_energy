'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FinancingCard from '../../products/[id]/financingCard';
import { usePathname } from "next/navigation";

interface FinancingFormProps {
    setShowFinancingModal: (value: boolean) => void;
    setShowPayCompletedModal: (value: boolean) => void;
}

export default function FinancingForm({ setShowFinancingModal, setShowPayCompletedModal }: FinancingFormProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const pathname = usePathname();

    const navigate = async () => {
        setShowFinancingModal(false)
        setShowPayCompletedModal(true)
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md py-[1%] mx-auto"
        >
            <FinancingCard pathname={pathname} id={2} navigate={navigate} />
        </motion.div>
    );
}
