import { manrope } from "@/lib/font";

export default function Breadcrumb() {
  return (
    <nav className="flex items-center my-3 space-x-2">
      <span className={`px-2 py-1 rounded-full border border-[#ECF2FF] bg-[#FFFFFF] text-[9.24px]`}>
        <a href="#" className={`${manrope.className} text-[#000000] font-medium`}>Home</a>
      </span>

      <span className={`px-2 py-1 rounded-full border border-[#ECF2FF] bg-[#FFFFFF] text-[9.24px]`}>
        <a href="#" className={`${manrope.className} text-[#000000] font-medium`}>Power Combo</a>
      </span>

      <span className={`px-2 py-1 rounded-full border border-[#ECF2FF] bg-[#FFFFFF] text-[9.24px]`}>
        <a href="#" className={`${manrope.className} text-[#000000] font-medium`}>Home</a>
      </span>

      <span className={`px-2 py-1 rounded-full border border-[#ECF2FF] bg-[#FFFFFF] text-[9.24px]`}>
        <a href="#" className={`${manrope.className} text-[#000000] font-medium`}>Home</a>
      </span>
    </nav >
  );
}
