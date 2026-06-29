'use client';

import { Suspense } from 'react';
import Breadcrumb from "./breadCrumb";
import BuyNowCard from "./buyNowCard";
import FinancingCard from "./financingCard";
import ProductGallery from "./productGallery";
import ProductInfo from "./productInfo";
import RelatedProducts from "./relatedProducts";
import { useParams, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

function ProductDetailPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const productId = params.id as string;
  const data = searchParams.get("data");
  const product = data ? JSON.parse(data) : null;

  console.log("Data: ", product)

  return (
    <div className="flex bg-[#F9F9F9] w-full">
      <div className="w-full lg:w-[93%] xl:w-[93%] mx-auto px-4 md:px-2 lg:px-4 xl:px-4 pb-16">
        <Breadcrumb />

        <div className="grid grid-cols-1 md:flex lg:flex xl:flex gap-4 md:gap-2 lg:gap-4 xl:gap-4 items-start w-full">
          {/* Left Column - Main Content */}
          <div className="bg-[#ffffff] flex flex-col gap-8 w-full md:w-[60%] lg:w-[62%] xl:w-[65%]">
            <ProductGallery prod={product} />
            <ProductInfo prod={product} />
            <div className='hidden md:block lg:block xl:block'>
               <RelatedProducts />
            </div>
          </div>

          {/* Right Column - Sidebar (Cards) */}
          <div className="order-2 flex flex-col gap-6 w-full md:w-[38%] lg:w-[38%] xl:w-[35%] pb-12">
            <BuyNowCard prod={product} />
            <FinancingCard pathname={""} prod={product} />
            <div className='bg-white md:hidden lg:hidden xl:hidden rounded-[10px]'>
                <RelatedProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#0C6170]" />
      </div>
    }>
      <ProductDetailPageContent />
    </Suspense>
  );
}
