'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { gabarito, manrope } from '@/lib/font';
import solar from "@/assets/images/solar.png";
import { FiPhoneCall } from "react-icons/fi";

type titleProp = {
    title: string;
    content: string;
    btn: string;
}

export default function CompletedCard({ title, content, btn }: titleProp) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Card className="max-w-md mx-auto border-0 bg-white pt-8">
                <CardContent>
                    <div className='flex justify-center items-center bg-[#F9F9F9] mx-auto h-[300px]'>
                        <Image
                            src={solar}
                            alt="img"
                            className='w-[262.79px] h-[251.14px]'
                        />
                    </div>
                    <div className='text-center mt-2'>
                        <h1 className={`${manrope.className} text-[18.14px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-[600]`}>{title}</h1>
                        <p className={`${manrope.className} text-[14.51px] md:text-[16px] lg:text-[16px] xl:text-[16px] mt-2 px-8`}>{content}</p>
                    </div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className={`${gabarito.className} w-full text-white text-[14.51px] md:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold py-6 bg-[#0C6170] mt-5 rounded-[5px] cursor-pointer`}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Signing In...
                            </>
                        ) : (
                            btn
                        )}
                    </Button>
                    <div className='flex justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <FiPhoneCall color='#0C6170' />
                            <p className={`${manrope.className} text-[14.51px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-[#0C6170]`}>Stay in touch</p>
                        </div>
                        <p className={`${manrope.className} text-[17px] md:text-[19px] lg:text-[19px] xl:text-[19px] font-[500]`}>0906 000 0000</p>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
