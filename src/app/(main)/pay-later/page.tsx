'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, ChevronDown, Info, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JuloSlider } from '@/components/julo-slider';

export default function FinancingPage() {
  const [duration, setDuration] = useState([12]);
  const [downPayment, setDownPayment] = useState([45000]);
  const [installation, setInstallation] = useState('yes');

  const principal = 450000;
  const interestRate = 0.15;
  const totalInterest = principal * interestRate;
  const totalAmount = principal + totalInterest;
  const monthlyEstimate = (totalAmount - downPayment[0]) / duration[0];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* Hero Header */}
      <section className="bg-[#1B4D54] py-24 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold uppercase  leading-tight">
              Power Financing <br /><span className="text-[#00BFA5]">Made Seamless</span>
            </h1>
            <p className="text-xl text-white/60 font-medium">
              Flexible payment plans designed to make renewable energy accessible for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Calculator Section - Figma Web Style */}
      <section className="max-w-[1200px] mx-auto px-4 -mt-24">
        <div className="bg-white rounded-[4rem] shadow-2xl shadow-[#1B4D54]/10 overflow-hidden flex flex-col lg:flex-row">

          {/* Inputs Panel */}
          <div className="lg:w-2/3 p-12 lg:p-20 space-y-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#1B4D54] uppercase ">Configure Your Plan</h2>
              <p className="text-gray-400 font-bold uppercase  text-xs">Buy Now, Pay Later</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Installation Toggle */}
              <div className="space-y-6">
                <label className="text-[10px] font-bold text-gray-400 uppercase  flex items-center gap-2">
                  Installation Required <Info className="h-3 w-3" />
                </label>
                <div className="flex gap-4">
                  {['yes', 'no'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setInstallation(opt)}
                      className={`flex-1 py-4 rounded-2xl font-bold uppercase text-xs  transition-all ${installation === opt
                          ? 'bg-[#1B4D54] text-white shadow-xl shadow-[#1B4D54]/20'
                          : 'bg-[#F8F9FA] text-[#1B4D54]/40 hover:bg-gray-100'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kit Dropdown */}
              <div className="space-y-6">
                <label className="text-[10px] font-bold text-gray-400 uppercase ">Installation Kit</label>
                <div className="relative group">
                  <div className="w-full h-14 bg-white border-2 border-[#1B4D54]/10 rounded-2xl flex items-center justify-between px-6 cursor-pointer group-hover:border-[#1B4D54]/30 transition-all">
                    <span className="text-sm font-bold text-[#1B4D54]">Bungalow Set</span>
                    <ChevronDown className="h-5 w-5 text-[#1B4D54]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-12 pt-8">
              <JuloSlider
                label="Repayment Duration"
                value={duration[0]}
                min={6}
                max={24}
                step={6}
                unit=" Months"
                onChange={setDuration}
              />

              <JuloSlider
                label="Down Payment"
                value={downPayment[0]}
                min={20000}
                max={150000}
                step={5000}
                formatValue={(val) => `₦${val.toLocaleString()}`}
                onChange={setDownPayment}
              />
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:w-1/3 bg-[#E0F2F2] p-12 lg:p-16 flex flex-col justify-between">
            <div className="space-y-12">
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold text-[#1B4D54]/50 uppercase ">Monthly Repayment</h3>
                <div className="text-5xl font-bold text-[#1B4D54]">
                  ₦{monthlyEstimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>

              {/* Summary Table */}
              <div className="space-y-6 pt-12 border-t border-[#1B4D54]/10">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1B4D54]/60 uppercase ">Principal Amount</span>
                  <span className="text-sm font-bold text-[#1B4D54]">₦{principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1B4D54]/60 uppercase ">Total Interest</span>
                  <span className="text-sm font-bold text-[#1B4D54]">₦{totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1B4D54]/60 uppercase ">Processing Fee</span>
                  <span className="text-sm font-bold text-[#1B4D54]">FREE</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/50 flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-[#1B4D54] shrink-0" />
                <p className="text-[10px] font-bold text-[#1B4D54] leading-relaxed uppercase ">
                  No collateral required for systems under ₦2.5M. Instant approval in 24 hours.
                </p>
              </div>
              <Button className="w-full bg-[#1B4D54] hover:bg-[#153a3f] text-white rounded-[2rem] py-8 h-auto font-bold uppercase text-sm  shadow-2xl shadow-[#1B4D54]/20 group">
                Start Application <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-24 max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Zero Hidden Fees', desc: 'What you see is exactly what you pay. No processing or administrative charges.' },
            { title: 'Full Ownership', desc: 'You own the system from day one. Payment plans are just a bridge to energy freedom.' },
            { title: 'Flexible Terms', desc: 'Switch payment dates or pay off early with zero penalties.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 space-y-6 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-[#E0F2F2] rounded-2xl flex items-center justify-center text-[#1B4D54]">
                <Zap className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-[#1B4D54] uppercase ">{item.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
