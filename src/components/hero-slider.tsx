'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { slides } from "@/lib/static";


export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[129px] md:h-[200px] lg:h-[250px] xl:h-[370px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt="Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative left-[5%] z-20 h-full flex items-center px-6 md:px-16">
            <div className="max-w-[70%] text-white">
              <h1 className="text-4xl md:text-7xl font-black leading-none uppercase whitespace-pre-line">
                {slide.title}
              </h1>

              <div className="mt-4">
                <p className="text-yellow-400 font-bold text-lg md:text-2xl uppercase">
                  Price From
                </p>

                <div className="inline-block bg-black px-6 py-3 rotate-[-3deg]">
                  <p className="text-4xl md:text-6xl font-black">
                    {slide.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-7 lg:bottom-9 xl:bottom-8 left-2 md:left-3 lg:left-5 xl:left-21 flex gap-1 md:gap-2 lg:gap-2 xl:gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 xl:w-3 xl:h-3 rounded-full transition-all ${current === index
              ? "bg-white scale-110"
              : "bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
}