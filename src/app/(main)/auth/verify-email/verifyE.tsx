'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { manrope } from '@/lib/font';

interface VerifyProps {
  setShowPayCompletedModal?: (value: boolean) => void;
  setVerifyModal?: (value: boolean) => void;
  from?: string | null;
  setShowIdentificationModal?: (value: boolean) => void;
}

function VerifyForm({ setShowPayCompletedModal, setVerifyModal, from, setShowIdentificationModal }: VerifyProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [values, setValues] = useState<string[]>(
    Array(5).fill("")
  );

  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (from === "buy-now") {
      setVerifyModal?.(false)
      setShowPayCompletedModal?.(true)
    }
    else if (from === "financing") {
      setVerifyModal?.(false)
      setShowIdentificationModal?.(true)
    }
  };

  const handleChange = (index: number, value: string) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
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
            <p className={`${manrope.className} text-[16.96px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-[600]`}>Verify Email Address</p>
            <div></div>
          </CardTitle>
          <hr className='mt-5' />
        </CardHeader>

        <CardContent>
          <h1 className={`${manrope.className} text-[13.57px] md:text-[16px] lg:text-[16px] xl:text-[16px] px-[18%] text-center`}>Verification code has been sent to bigrichi@gmail.com</h1>
          <form className="space-y-4 mt-2">
            {error && (
              <Alert variant="destructive" className="animate-in fade-in duration-300">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="p-4 flex justify-evenly items-center w-full">
              {values.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  maxLength={1}
                  onChange={(e) =>
                    handleChange(index, e.target.value)
                  }
                  className="border p-2 text-center rounded w-[56px] h-[56px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              ))}
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

export default function VerifyEmailPage({ setShowPayCompletedModal, setVerifyModal, from, setShowIdentificationModal }: VerifyProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#006666]" />
      </div>
    }>
      <VerifyForm setShowPayCompletedModal={setShowPayCompletedModal} setVerifyModal={setVerifyModal} from={from} setShowIdentificationModal={setShowIdentificationModal} />
    </Suspense>
  );
}
