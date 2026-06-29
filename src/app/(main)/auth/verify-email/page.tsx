'use client';

import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import VerifyEmailPage from './verifyE';


function VerifyPage() {
    return (
        <div className='bg-[#F2F2F2] py-0 md:py-5 lg:py-5 xl:py-5 px-[0%] md:px-[5%] lg:px-[5%] xl:px-[5%] h-[80vh]'>
            <div className='bg-[#ffffff] py-8 px-[5%] md:px-[0%] lg:px-[0%] xl:px-[0%]'>
                <VerifyEmailPage/>
            </div>
        </div>
    );
}

export default function VerifyPagee() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white p-4">
                <Loader2 className="h-10 w-10 animate-spin text-[#134e4a]" />
            </div>
        }>
            <VerifyPage />
        </Suspense>
    );
}

