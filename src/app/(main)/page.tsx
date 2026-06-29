'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { type Product, type Category, type ProductT } from '@/services/product.service';
import { CategoryList } from '@/components/category-list';
import { SponsorsList } from '@/components/sponsors-list';
import { HeroSlider } from '@/components/hero-slider';
import { FlashSalesCard } from '@/components/flash-sales';
import { BsArrowRight } from "react-icons/bs";
import { Businesses } from '@/components/business';
import { ProductCard } from '@/components/productCard';
import { FaStar } from "react-icons/fa6";
import { manrope } from "@/lib/font";
import { recommendedProduct, featuredCategories, featuredSponsors, featuredBusiness, products } from '@/lib/static';
import Skeleton from '@/components/ui/skelenton-loader';
import tag from "@/assets/images/tag-2.svg";
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-[75vh] flex items-center justify-center bg-white">
        <Skeleton />
      </div>
    );
  }

  const handleNavigate = (product: ProductT[], rout: string) => {
    router.push(
      `/${rout}/?data=${encodeURIComponent(
        JSON.stringify(product)
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] pt-0 md:pt-2 lg:pt-2 xl:pt-2 pb-[5%]">
      <div className='px-[2%] w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] md:my-[1%] lg:my-[1%] xl:my-[1%] md:pt-[0] lg:pt-[0] xl:pt-[1.5%] pb-8 mx-auto bg-white'>
        <HeroSlider />

        {/* Categories Bar */}
        <CategoryList categories={featuredCategories} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mt-[1%] mx-auto bg-[#ffffff]'>
        <SponsorsList sponsors={featuredSponsors} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto bg-[#ffffff] mt-5'>
        <div className='flex justify-between items-center bg-[#F94444] text-white p-3'>
          <div className='flex items-center'>
            <Image src={tag} alt="icon" className='w-5'/>
            <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2`}>Flash Sales</p>
          </div>
          <p className={`${manrope.className} text-[12px] md:text-[17px] lg:text-[17px] xl:text-[17px]`}>Time Left: <span className={`font-bold`}>02h : 28m : 02s</span></p>
          <div className='flex items-center'>
            <p
              className={`${manrope.className} mr-2 text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] cursor-pointer`}
              onClick={() => handleNavigate(products, "flashproducts")}
            >
              See more
            </p>
            <BsArrowRight className='w-[15px]'/>
          </div>
        </div>
        <FlashSalesCard flashProds={products} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] my-[1%] mx-auto bg-[#ffffff] mt-5'>
        <Businesses business={featuredBusiness} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto bg-[#ffffff] mt-5'>
        <div className='flex justify-between items-center bg-[#0C705F] text-white p-3'>
          <div className='flex items-center'>
            <FaStar />
            <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2`}>Top Sellers</p>
          </div>
          <div className='flex items-center'>
            <p
              className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] mr-2 cursor-pointer`}
              onClick={() => handleNavigate(products, "topsellerproducts",)}
            >
              See more
            </p>
            <BsArrowRight />
          </div>
        </div>
        <ProductCard products={products} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto bg-[#ffffff] mt-5'>
        <div className='flex justify-between items-center bg-white text-black p-3'>
          <div className='flex items-center'>
            <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2`}>Recommended</p>
          </div>
          <div className='flex items-center'>
            <p
              className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] mr-2 cursor-pointer`}
              onClick={() => handleNavigate(recommendedProduct, "recommproducts",)}
            >
              See more
            </p>
            <BsArrowRight />
          </div>
        </div>
        <ProductCard products={recommendedProduct} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto bg-[#ffffff] mt-5'>
        <div className='flex justify-between items-center bg-white text-black p-3'>
          <div>
            <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2`}>Top Selling Item</p>
          </div>
          <div className='flex items-center'>
            <p
              className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] mr-2 cursor-pointer`}
              onClick={() => handleNavigate(products, "topsellingproducts",)}
            >
              See more
            </p>
            <BsArrowRight />
          </div>
        </div>
        <ProductCard products={products} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto bg-[#ffffff] mt-5'>
        <div className='flex justify-between items-center bg-[#FFC300] text-black p-3'>
          <div>
            <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2`}>Solar Panel Deals</p>
          </div>

          <div className='flex items-center'>
            <p
              className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] mr-2 cursor-pointer`}
              onClick={() => handleNavigate(products, "solarproducts",)}
            >
              See more
            </p>
            <BsArrowRight />
          </div>
        </div>
        <ProductCard products={products} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto bg-[#ffffff] mt-4'>
        <div className='flex justify-between items-center bg-[#FFC300] text-black p-3'>
          <div>
            <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2`}>Inverter Deals</p>
          </div>

          <div className='flex items-center'>
            <p
              className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] mr-2 cursor-pointer`}
              onClick={() => handleNavigate(products, "inverterproducts",)}
            >
              See more
            </p>
            <BsArrowRight />
          </div>
        </div>
        <ProductCard products={products} />
      </div>

      <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto bg-[#ffffff] mt-4'>
        <div className='flex justify-between items-center bg-[#FFC300] text-black p-3'>
          <div>
            <p className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] ml-2`}>Battery Deals</p>
          </div>

          <div className='flex items-center'>
            <p
              className={`${manrope.className} text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] mr-2 cursor-pointer`}
              onClick={() => handleNavigate(products, "batteryproducts",)}
            >
              See more
            </p>
            <BsArrowRight />
          </div>
        </div>
        <ProductCard products={products} />
      </div>
    </div>
  );
};
