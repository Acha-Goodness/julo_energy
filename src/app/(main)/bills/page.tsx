'use client';

import { motion } from 'framer-motion';
import { billTypes } from '@/lib/static';
import { Button } from '@/components/ui/button';
import { recentTransactions } from '@/lib/static';
import { Zap, History, ArrowUpRight, Plus } from 'lucide-react';

export default function BillsPage() {

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-[#1A1A1A] uppercase ">Bill Payments</h1>
              <p className="text-gray-500 font-medium">Quick and secure payments for all your utilities and services.</p>
            </div>
            <div className="bg-[#006666] p-6 rounded-[2rem] text-white flex items-center gap-8 shadow-xl shadow-teal-900/10 min-w-[300px]">
              <div>
                <p className="text-[10px] font-bold uppercase opacity-60  mb-1">Julo Wallet</p>
                <p className="text-2xl font-bold">₦45,250.00</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Plus className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-8 uppercase r">Select Bill Type</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {billTypes.map((bill, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center gap-4 hover:shadow-lg transition-all"
                  >
                    <div className={`w-16 h-16 ${bill.color} rounded-full flex items-center justify-center`}>
                      <bill.icon className="h-7 w-7" />
                    </div>
                    <span className="font-bold text-[#1A1A1A] uppercase text-xs ">{bill.name}</span>
                  </motion.button>
                ))}
              </div>
            </section>

            {/* Quick Recharge Form (Figma Style) */}
            <section className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-8 uppercase r">Quick Recharge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase  px-4">Network Provider</label>
                  <div className="flex gap-4">
                    {['MTN', 'Airtel', 'Glo', '9mobile'].map((p) => (
                      <button key={p} className="flex-1 h-12 rounded-2xl bg-[#F8F9FA] text-[10px] font-bold hover:bg-[#E0F2F1] hover:text-[#006666] border border-transparent hover:border-[#006666]/30 transition-all">
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase  px-4">Phone Number</label>
                  <input type="text" placeholder="080 0000 0000" className="w-full h-14 rounded-2xl bg-[#F8F9FA] border-none px-6 font-bold focus:ring-2 focus:ring-[#006666]" />
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 w-full space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase  px-4">Select Amount</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['₦500', '₦1000', '₦2000', '₦5000', '₦10000', 'Custom'].map((a) => (
                      <button key={a} className="h-12 rounded-2xl bg-[#F8F9FA] text-xs font-bold hover:bg-[#006666] hover:text-white transition-all">
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
                <Button className="w-full md:w-48 h-20 rounded-[2rem] bg-[#006666] hover:bg-[#004D40] text-white font-bold text-lg shadow-xl mt-6">
                  Pay Now
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <section className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 uppercase leading-tight">Pay Bills <br /><span className="text-[#00BFA5]">Earn Points</span></h3>
                <p className="text-sm opacity-60 font-medium mb-8">Get 2% cashback as Julo Points on every electricity and cable subscription.</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full w-full h-12 font-bold">Learn More</Button>
              </div>
              <Zap className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5" />
            </section>

            <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-[#1A1A1A] uppercase ">Recent Activity</h3>
                <History className="h-4 w-4 text-gray-400" />
              </div>
              <div className="space-y-6">
                {recentTransactions.map((tx, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E0F2F1] group-hover:text-[#006666] transition-colors">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1A1A1A]">{tx.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#1A1A1A]">{tx.amount}</p>
                      <p className="text-[10px] text-[#00BFA5] font-bold uppercase">{tx.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-8 text-xs font-bold text-gray-400 hover:text-[#006666] uppercase ">View Full History</Button>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}
