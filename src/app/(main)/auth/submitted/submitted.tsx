'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import CompletedCard from '@/components/completedCard';
import { Loader2 } from 'lucide-react';

interface SubmittedProps {
  from: string | null;
}

function Submitted({ from }: SubmittedProps) {

  let title: string;
  let content: string;
  let btn: string;

  from === "buy-now" ?
    title = "Payment Competed" :
    title = "Application Submitted";


  from === "buy-now" ?
    content = "You have successfully paid for this package, you can track page, and keep contact with us." :
    content = "Your application to finance this power solution has been submitted, and we will get back to you shortly"

  from === "buy-now" ?
    btn = "Track Item" :
    btn = "Track Application"

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <CompletedCard title={title} content={content} btn={btn} />
      </motion.div>
    </div>
  );
}

export default function SubmittedMainPage({ from }: SubmittedProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#006666]" />
      </div>
    }>
      <Submitted from={from} />
    </Suspense>
  );
}