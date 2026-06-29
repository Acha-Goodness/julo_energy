'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { type LoginData } from '@/services/auth.service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { IoIosArrowRoundBack } from "react-icons/io";
import google from "../../../../assets/images/google.png";
import avatar from "../../../../assets/images/avatar.png";
import { RxCross2 } from "react-icons/rx";
import { roboto, poppins, gabarito, manrope } from '@/lib/font';

interface LoginFormProps {
  setVerifyModal?: (value: boolean) => void;
  setIsLoggedIn?: (value: boolean) => void;
}

function LoginForm({ setVerifyModal, setIsLoggedIn }: LoginFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams()
  const from = searchParams.get('from')

  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(pathname) router.push("/auth/verify-email")

    setVerifyModal?.(true);
    setIsLoggedIn?.(true);
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
        <CardHeader className="space-y-0 text-center">
          <CardTitle className="flex items-center font-semibold text-[#0C6170]">
            <IoIosArrowRoundBack color='#292D32' size={24} />
            <p className={`${manrope.className} ml-[25%] md:ml-[30%] lg:ml-[30%] xl:ml-[30%] text-[16.96px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-[600]`}>Login Account</p>
          </CardTitle>
          <hr className='mt-3 md:mt-5 lg:mt-5 xl:mt-5' />
        </CardHeader>

        <CardContent>
          <div className='border-1 border-[#F2F2F2] rounded-[10px]'>
            <div className='flex justify-between items-center p-4'>
              <div className='flex items-center'>
                <Image src={google} alt="google" />
                <p className={`${poppins.className} ml-4 text-[13.57px] md:text-[16px] lg:text-[16px] xl:text-[16px]`}>Sign in to Julo with Google </p>
              </div>
              <RxCross2 />
            </div>
            <hr className='' />
            <div className='flex items-center p-4'>
              <Image src={avatar} alt="avatar" />
              <div className='ml-4'>
                <p className='text-[13.57px] md:text-[16px] lg:text-[16px] xl:text-[16px] font-bold'>Niclas Lundberg</p>
                <p className={`${roboto.className} text-[10.17px] md:text-[12px] lg:text-[12px] xl:text-[12px]`}>niclas@undeco.se</p>
              </div>
            </div>
            <div className='px-4 pb-4'>
              <button className='bg-[#2673E4] text-[13.57px] md:text-[16px] lg:text-[16px] xl:text-[16px] font-bold text-white py-2 rounded-[5px] w-full'>
                Continue as Niclas
              </button>
              <p className={`${roboto.className} text-[11.87px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-[#4D4D4D] font-regular mt-4`}>
                To create your account, Google will share your name, email address,
                and profile with picture with <span className='text-[#2673E4]'>My App</span>. See MyApp’s <span className='text-[#2673E4]'>privacy policy</span> and <span className='text-[#2673E4]'>terms of services</span>.
              </p>
            </div>
          </div>

          <div className='mt-2 md:mt-4 lg:mt-4 xl:mt-4 flex justify-between items-center'>
            <hr className='block w-[45%]' />
            <p className={`${manrope.className} text-[11.02px] md:text-[13px] lg:text-[13px] xl:text-[13px] font-semibold`}>Or</p>
            <hr className='block w-[45%]' />
          </div>
          <form className="space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-4 mt-0 md:mt-2 lg:mt-2 xl:mt-2">
            {error && (
              <Alert variant="destructive" className="animate-in fade-in duration-300">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label className={`${gabarito.className} text-[11.87px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-[#000000]`}>Email Address</Label>
              <div className="mt-2"> 
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  // required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-4 placeholder:text-[11px]"
                  placeholder="Email Address"
                />
              </div>
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

export default function AuthLoginPage({ setVerifyModal, setIsLoggedIn }: LoginFormProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#006666]" />
      </div>
    }>
      <LoginForm setVerifyModal={setVerifyModal} setIsLoggedIn={setIsLoggedIn} />
    </Suspense>
  );
}