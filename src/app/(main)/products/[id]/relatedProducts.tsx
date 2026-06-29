'use client';

import Image from "next/image";
import { productts } from "@/lib/static";


export default function RelatedProducts() {


  return (
    <div className="flex flex-col mt-8 pb-12 w-full">
      <h3 className="font-semibold text-gray-900 text-lg mx-4">Related Products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mx-4">
        {productts.map((product) => (
          <div key={product.id} className="flex flex-col bg-[#fafafa] rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-square mb-4 bg-white rounded flex items-center justify-center p-2 mix-blend-multiply">
              <Image src={product.image} alt={product.title} fill className="object-contain" />
            </div>
            <h4 className="text-[10px] text-gray-700 truncate mb-1" title={product.title}>{product.title}</h4>
            <p className="font-bold text-gray-900 text-[10px] mb-4">{product.price}</p>
            <button className="w-full bg-transparent border border-[#0C6170] text-[#0C6170] rounded px-4 py-1.5 text-[10.82px] font-[500] hover:bg-[#0C6170] hover:text-white transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
