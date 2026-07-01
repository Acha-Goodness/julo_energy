'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import CatBreadcrumbs from '../catBreadCrumbs';
import { manrope, gabarito } from "@/lib/font";
import { menus, dropmenu, sortmenu } from '@/lib/static';
import Image from 'next/image';
import powercombo from "@/assets/images/solar.png";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import DropDown from '@/components/ui/dropdown-list';
import SortDropDown from '@/components/ui/sort-by';
import element3 from "@/assets/images/element-3.svg";
import grid3 from "@/assets/images/grid-6.svg";
import { type ProductT } from '@/services/product.service';
import { comboProducts } from '@/lib/static';
import Skeleton from '@/components/ui/skelenton-loader';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


function CategoryPageContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState<string>("");
  const [prodType, setProdType] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Batteries");
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("All Batteries");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [catMenuOpen, setCatMenuOpen] = useState(false);

  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsOpenSort(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (name) {
      setTitle(name);
    }
  }, [name])

  useEffect(() => {
    switch (title) {
      case "Power Combo":
        setProdType("Combo Type");
        break;
      case "Solar Panels":
        setProdType("Solar Type");
        break;
      case "Batteries":
        setProdType("Battery Type");
        break;
      case "Inverters":
        setProdType("Inverter Type");
        break;
      case "Controllers":
        setProdType("Controller Type");
        break;
      case "Street Light":
        setProdType("Street Light Type");
        break;
      case "CCTV":
        setProdType("CCTV Type");
        break;
      case "Commercial Energy":
        setProdType("Commercial Energy Type");
        break;
      case "Smart Metre":
        setProdType("Smart Metre Type");
        break;
      case "Power Generator":
        setProdType("Power Generator Type");
        break;
      case "Power Bank":
        setProdType("Power Bank Type");
        break;
      case "E-Bikes":
        setProdType("E-Bikes Type");
        break;
      default:
        setProdType("Combo Type");
    }
  }, [title]);

  const prod = [
    {
      id: 1,
      img: powercombo,
      label: "Julo Package 1 + Tubular Battery",
      price: "$14,000.00"
    }
  ];

  const combos = Array.from({ length: 25 }, () => ({
    ...prod[0],
  }));

  useEffect(() => {
    // Set timeout for loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, []);


  const filteredProd =
    selectedTag === "all"
      ? comboProducts
      : comboProducts.filter((prod) =>
        prod.tags.includes(selectedTag)
      );

  const handleNavigate = (prod: ProductT) => {
    router.push(
      `/products/${prod.id}?data=${encodeURIComponent(
        JSON.stringify(prod)
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-5">
      <div className="flex flex-col max-w-[90%] md:max-w-[98%] lg:max-w-[90%] xl:max-w-[90%] mx-auto md:flex-row lg:flex-row xl:flex-row gap-6 md:gap-2 lg:gap-6 xl:gap-6">
        <aside className="lg:w-[22%]">
          <CatBreadcrumbs />
          <div className="bg-white pt-10 pb-5 rounded-[10px] border border-[#EAEAEA]">
            <div className='flex items-center justify-between pr-4'>
              <h1 className={`${manrope.className} ml-[7%] font-[600] text-[17px] text-[#000000]`}>Categories</h1>
              <div className='md:hidden lg:hidden xl:hidden '>
                {catMenuOpen ? <RxCross1 className='text-[24px] cursor-pointer' onClick={() => setCatMenuOpen(!catMenuOpen)} /> : <RxHamburgerMenu className='text-[24px] cursor-pointer' onClick={() => setCatMenuOpen(!catMenuOpen)} />}
              </div>
            </div>
            <nav className={`mt-7 absolute md:static lg:static xl:static w-[89.3%] bg-white overflow-hidden ${catMenuOpen ? 'max-h-[500px] md:max-h-[100vh]' : 'max-h-0 md:max-h-[100vh]'} transition-all duration-300 ease-in-out`}>
              <ul className='grid grid-cols-2 md:flex lg:flex xl:flex flex-col'>
                {
                  menus.map((menu, idx) => (
                    <div key={idx} className='flex items-center gap-2 mt-1 border-b border-[#F9F9F9] pb-3 pl-[15%] cursor-pointer'
                      onClick={() => {
                        setTitle(menu.title);
                        setCatMenuOpen(!catMenuOpen)
                      }}
                    >
                      <div className='bg-[#F9F9F9] w-[36.73px] h-[36.73px] flex items-center justify-center rounded-[7.06px]'>
                        <Image src={menu.img} alt="alt" className='w-[16.74px] h-[24.92px]' />
                      </div>
                      <p className={`${manrope.className} text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] ${menu.title === title && "text-[#0C6170] font-bold"}`}>{menu.title}</p>
                    </div>
                  ))
                }
              </ul>
            </nav>
            <div className='ml-[7%] mt-[15%] space-y-3'>
              <p className={`${manrope.className} font-[600]`}>Price Range</p>
              <div className='flex justify-between w-[80%] items-center'>
                <div className={`${manrope.className} w-[106px] h-[49px] rounded-[10px] flex items-center px-2 border border-[#EAEAEAF9]`}>
                  <p>N {0}</p>
                </div>
                <p>-</p>
                <div className={`${manrope.className} w-[106px] h-[49px] rounded-[10px] flex items-center px-2 border border-[#EAEAEAF9]`}>
                  <p>N {0}</p>
                </div>
              </div>
              <p className={`${manrope.className} text-[14.42px] text-[#979797]`}>N 0 - N 1,000,000</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 mt-0 md:mt-5 lg:mt-0 xl:mt-0">
          {loading ? (
            <div className="flex items-center justify-center h-[500px]">
              <Skeleton />
            </div>
          ) : (
            <div className="bg-white rounded-[10px] p-5 border border-[#EAEAEA] w-[100%] mt-[2.7%]">
              <h1 className={`${manrope.className} text-[23px] font-[600] text-[#000000]`}>{title}</h1>
              <div className='flex gap-2 mt-8'>
                <Button className={`${manrope.className} ${selectedTag === "all" ? "bg-[#0C6170] text-[#fff]" : "bg-[#FFFFFF] text-[#212529]"} text-[12px] border border-[#E5E5E5] border-[0.8px] rounded-[3.2px] cursor-pointer`}
                  onClick={() => setSelectedTag("all")}
                >
                  All
                </Button>
                <Button className={`${manrope.className} ${selectedTag === "pure sine wave" ? "bg-[#0C6170] text-[#fff]" : "bg-[#FFFFFF] text-[#212529]"} text-[12px] border border-[#E5E5E5] border-[0.8px] rounded-[3.2px] cursor-pointer`}
                  onClick={() => setSelectedTag("pure sine wave")}
                >
                  Pure Sine Wave
                </Button>
                <Button className={`${manrope.className} ${selectedTag === "hybrid" ? "bg-[#0C6170] text-[#fff]" : "bg-[#FFFFFF] text-[#212529]"} text-[12px] border border-[#E5E5E5] border-[0.8px] rounded-[3.2px] cursor-pointer`}
                  onClick={() => setSelectedTag("hybrid")}
                >
                  Hybrid
                </Button>
              </div>

              <div className='mt-5'>
                <div className='flex items-center justify-between'>
                  <div className='items-center gap-2 hidden md:flex lg:flex xl:flex'>
                    <div>
                      <Image src={grid3} alt="icon" />
                    </div>
                    <div>
                      <Image src={element3} alt="icon" />
                    </div>
                  </div>
                  <div ref={dropdownRef}>
                    <div className='flex gap-2'>
                      <Button className={`${manrope.className} bg-white text-[#212529] text-[12px] border border-[#E5E5E5] border-[0.8px] rounded-[3.2px] cursor-pointer truncate `}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsOpen(!isOpen)
                          setIsOpenSort(false)
                        }}
                      >
                        <div className="max-w-[100px] truncate">
                          {prodType}
                        </div>
                        {isOpen ? <GoChevronUp size={20} className='ml-5' /> : <GoChevronDown size={20} className='ml-5' />}
                      </Button>

                      <Button className={`${manrope.className} bg-white text-[#212529] text-[12px] border border-[#E5E5E5] border-[0.8px] rounded-[3.2px] cursor-pointer`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsOpenSort(!isOpenSort)
                          setIsOpen(false)
                        }}
                      >
                        Sort by
                        {isOpenSort ? <GoChevronUp size={20} className='ml-5' /> : <GoChevronDown size={20} className='ml-5' />}
                      </Button>
                    </div>
                    <DropDown menus={dropmenu} open={isOpen} setIsOpen={setIsOpen} selected={selected} setSelected={setSelected} prodType={prodType} />
                    <SortDropDown menus={sortmenu} open={isOpenSort} setIsOpenSort={setIsOpenSort} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
                  </div>
                </div>

                <div className="h-[72vh] mt-5 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 items-start gap-3">
                    {
                      filteredProd.map((combo) => (
                        <motion.div
                          key={combo.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className='bg-[#F9F9F9] w-full px-4 pb-5 pt-3 rounded-[9.04px] cursor-pointer'
                          onClick={() => handleNavigate(combo)}
                        >
                          <div className='flex justify-end mb-5'>
                            {combo.type ?
                              <Image
                                src={combo.type}
                                alt="img"
                                className='w-[51.19px] h-[14.75px]'
                              /> : <div className="w-[51.19px] h-[14.75px]" />}
                          </div>
                          <div className='flex justify-center'>
                            <Image src={combo.image} alt="img" width={150} height={123.6} />
                          </div>
                          <div className='mt-3 w-[58%]'>
                            <p className={`${manrope.className} text-[11.56px] text-[#272727]`}>{combo.name}</p>
                            <p className={`${gabarito.className} text-[11.81px] font-bold mt-1`}>{combo.price}</p>
                          </div>
                        </motion.div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <Loader2 className="h-12 w-12 animate-spin text-[#1B4D54]" />
      </div>
    }>
      <CategoryPageContent />
    </Suspense>
  );
}
