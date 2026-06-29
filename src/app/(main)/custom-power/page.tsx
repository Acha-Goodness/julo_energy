'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Home, Building2, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { inquiryService } from '@/services/inquiry.service';

export default function CustomPowerPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: 'Residential',
    monthlyBill: '',
    roofType: 'Flat',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await inquiryService.submitCustomPowerInquiry({
        ...formData,
        monthlyBill: Number(formData.monthlyBill)
      });
      alert("Consultation request received! Our team will contact you shortly.");
      setFormData({
        propertyType: 'Residential',
        monthlyBill: '',
        roofType: 'Flat',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      alert("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  const propertyTypes = [
    { id: 'Residential', icon: Home, label: 'Residential Home' },
    { id: 'Commercial', icon: Building2, label: 'Commercial Office' },
    { id: 'Industrial', icon: Factory, label: 'Industrial Facility' },
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a192f] py-20 lg:py-28 text-center text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-repeat" />
        <div className="container relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20"
          >
            <Settings className="h-4 w-4" />
            <span>Custom Engineering</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Tailored Power Systems for <span className="text-[#006B5D] bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Maximum Efficiency</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Every property is unique. Our expert engineers will design, construct, and install a bespoke renewable energy system mapped precisely to your energy consumption.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Information Side */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Custom Power?</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Off-the-shelf solar kits are great for standard needs, but complex facilities or large homes require granular engineering to prevent energy wastage and system overloads.</p>

                  <ul className="space-y-4">
                    {[
                      {
                        title: "Energy Load Auditing",
                        desc: "We physically monitor your premises to identify high-consumption appliances."
                      },
                      {
                        title: "Bespoke System Sizing",
                        desc: "Perfectly balancing inverter capacity to battery storage for your unique needs."
                      },
                      {
                        title: "Future-Proof Design",
                        desc: "Architecting systems that can easily scale when your energy demands grow."
                      },
                      {
                        title: "Dedicated Project Management",
                        desc: "A singular point-of-contact from survey to final grid interconnection."
                      }
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-[#006B5D] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-gray-900">{feature.title}</h4>
                          <p>{feature.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#006B5D] p-3 rounded-xl text-white">
                    <Zap className="h-6 w-6 fill-current" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Commercial Ready</h3>
                </div>
                <p className="text-gray-700">We specialize in designing high-output mini-grid solutions for factories, hotels, and large office complexes ranging from 50kW to 2MW.</p>
              </div>
            </div>

            {/* Form Side */}
            <Card className="border-gray-200 shadow-xl rounded-2xl overflow-hidden sticky top-24">
              <div className="bg-white border-b border-gray-100 p-6 sm:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#006B5D] to-cyan-400"></div>
                <h3 className="text-2xl font-bold text-gray-900">Request a Consultation</h3>
                <p className="text-gray-500 mt-2">Book a free physical site survey</p>
              </div>
              <CardContent className="p-6 sm:p-8 pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Property Type Selector */}
                  <div className="space-y-3">
                    <Label className="text-base text-gray-700">Type of Property</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {propertyTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = formData.propertyType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, propertyType: type.id })}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${isSelected
                                ? 'border-[#006B5D] bg-teal-50 text-[#006B5D]'
                                : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                              }`}
                          >
                            <Icon className={`h-6 w-6 mb-2 ${isSelected ? 'text-[#006B5D]' : 'text-gray-400'}`} />
                            <span className="text-xs font-medium text-center">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyBill">Average Monthly Electricity Bill (₦)</Label>
                      <Input
                        id="monthlyBill"
                        required
                        placeholder="e.g. 150000"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          required
                          placeholder="080..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Any specific requirements?</Label>
                      <textarea
                        id="message"
                        rows={3}
                        className="flex w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B5D] focus-visible:border-transparent"
                        placeholder="Tell us about any heavy machinery..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 text-lg bg-[#006B5D] hover:bg-[#005a4e] text-white rounded-xl shadow-lg mt-4"
                  >
                    {loading ? 'Submitting...' : (
                      <>
                        Book Free Survey <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
