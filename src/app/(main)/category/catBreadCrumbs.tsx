import Link from "next/link";
import { manrope } from "@/lib/font";
import { breadcrumbs } from "@/lib/static";


export default function CatBreadcrumbs() {
    return (
        <div className="flex gap-3">
            {breadcrumbs.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={`${manrope.className} px-2 py-1 rounded-full border border-[#ECF2FF] bg-[#FFFFFF] text-[9.24px] lg:text-[6.3px] xl:text-[9.24px] font-medium text-[#000] mb-2`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}