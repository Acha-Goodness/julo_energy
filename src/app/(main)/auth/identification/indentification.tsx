'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { type VerificationData } from '@/services/auth.service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { gabarito, manrope } from '@/lib/font';

interface IdentificationFormProps {
    setShowIdentificationModal: (value: boolean) => void;
    setShowFinancingModal: (value: boolean) => void;
}


export default function IdentificationForm({ setShowIdentificationModal, setShowFinancingModal }: IdentificationFormProps) {
    const [formData, setFormData] = useState<VerificationData>({
        nin: '',
        bvn: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShowIdentificationModal(false)
        setShowFinancingModal(true)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md py-[1%] mx-auto"
        >
            <Card className="max-w-md mx-auto border-0 bg-white">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="flex justify-between items-center text-[20px] font-semibold text-[#0C6170]">
                        <IoIosArrowRoundBack color='#292D32' size={24} />
                        <p className={`${manrope.className} text-[20px] font-[600]`}>Identity Verification</p>
                        <div></div>
                    </CardTitle>
                    <hr className='mt-5' />
                </CardHeader>

                <CardContent>
                    <form className="space-y-4 mt-2">
                        {error && (
                            <Alert variant="destructive" className="animate-in fade-in duration-300">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <div className="">
                            <Label htmlFor={`${gabarito.className} email text-[14px] text-[#000000]`}>NIN</Label>
                            <div className="mt-2 mb-2">
                                <Input
                                    id="nin"
                                    name="nin"
                                    type="number"
                                    // required
                                    value={formData.nin}
                                    onChange={handleChange}
                                    className="pl-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="NIN"
                                />
                            </div>
                            <p className={`${manrope.className} text-[12px] text-[#0C6170] font-[600]`}>Why NIN?</p>
                            <p className={`${manrope.className} text-[12px]`}>We need to verify your identity to proceed your eligibility check</p>
                        </div>

                        <div className="">
                            <Label htmlFor={`${gabarito.className} email text-[14px] text-[#000000]`}>BVN (Bank Verification Number)</Label>
                            <div className="mt-2 mb-2">
                                <Input
                                    id="bvn"
                                    name="bvn"
                                    type="number"
                                    // required
                                    value={formData.nin}
                                    onChange={handleChange}
                                    className="pl-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="BVN"
                                />
                            </div>
                            <p className={`${manrope.className} text-[12px] text-[#0C6170] font-[600]`}>Why BVN?</p>
                            <p className={`${manrope.className} text-[12px]`}>We need to verify your credit eligibility for power financing.</p>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full text-white font-semibold py-6 bg-[#0C6170] cursor-pointer"
                            onClick={handleSubmit}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing In...
                                </>
                            ) : (
                                'Continue'
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
