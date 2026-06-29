'use client';

import Image from "next/image";
import { Category } from '@/services/product.service';
import { useRouter } from 'next/navigation';
import { manrope } from "@/lib/font";

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  const router = useRouter();

  return (
    <section className="pt-6 bg-white overflow-hidden border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto md:px-6 lg:px-8 xl:px-8">
        <div className="grid grid-cols-6 md:flex lg:flex xl:flex items-center justify-between gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                onClick={() => router.push(`/category/${category.id}?name=${encodeURIComponent(category.name)}`)}
                className="flex flex-col items-center gap-4 shrink-0 group transition-all duration-300 cursor-pointer"
              >
                <div className="w-15 h-15 md:w-20 lg:w-20 xl:w-20 md:h-20 lg:h-20 xl:h-20 bg-[#F8F9FA] rounded-[1rem] flex items-center justify-center group-hover:-translate-y-2 transition-all duration-500 ease-out">
                  <div className="relative">
                    <Image src={category.image} alt={category.name} className="w-10 md:w-14 lg:w-14 xl:w-14 h-10 md:h-14 lg:h-14 xl:h-14 object-contain" />
                  </div>
                </div>
                <span className={`${manrope.className} text-[9px] md:text-[12px] lg:text-[12px] xl:text-[12px] text-[#000000] text-center truncate`}>
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
