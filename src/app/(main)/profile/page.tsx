'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Profile } from './profile';
import { Finance } from './finance/finanace';
import { More } from './more';
import { Orders } from './order/orders';
import { Loader2 } from 'lucide-react';
import { Menu } from './menu';

function UserProfileContent() {
    const router = useRouter();
    const [page, setPage] = useState<string>("my-acct");

    const searchParams = useSearchParams()
    const from = searchParams.get('from')|| ""

    useEffect(() => {
        setPage(from)
    }, [from])

    const handleSubmit = async (e: React.FormEvent) => {
        from === "buy-now" && router.push(`/auth/submitted?from=${from}`)
        from === "financing" && router.push('/auth/nin')
        from === "login" && null
    };

    return (
        <div className={`flex justify-center bg-gradient-to-br bg-[#F2F2F2] py-0 md:py-[2%] lg:py-[2%] xl:py-[2%]`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full md:w-[90%] lg:w-[90%] xl:w-[90%] bg-[#fff] ${page === "orders" && "h-[90vh]"} h-[75vh] px-8 py-0 md:py-10 lg:py-10 xl:py-10`}
            >
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-top gap-5 md:gap-10 lg:gap-15 xl:gap-35">
                    <Menu setPage={setPage} page={page} />
                    <div className='w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]'>
                        {
                            page === "my-acct" && <Profile /> ||
                            page === "orders" && <Orders /> ||
                            page === "pow-finan" && <Finance /> ||
                            page === "more" && <More />
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function UserProfile() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white p-4">
                <Loader2 className="h-10 w-10 animate-spin text-[#0C6170]" />
            </div>
        }>
            <UserProfileContent />
        </Suspense>
    );
}
