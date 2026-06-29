import { manrope } from '@/lib/font';
import person from "@/assets/images/user.svg";
import order from "@/assets/images/bag-2.svg";
import discount from "@/assets/images/Discount 2.svg";
import more from "@/assets/images/element-plus.svg";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface MenuProps {
    setPage?: (page: string) => void;
    page?: string;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    id?: string;
    isLoggedIn?: boolean;
}

export const Menu = ({ setPage, page, open, setOpen, id, isLoggedIn }: MenuProps) => {
    const router = useRouter();

    const navigate = (page: string) => {
        if (id === "login") {
            router.push(`/profile?from=${page}`)
        }
        setPage?.(page);
        setOpen?.(false);
    }

    const handleTrigger = () => {
        if(!isLoggedIn) {
            router.push(`/auth/login`)
            setOpen?.(false)
        }else{
            null
        }
    }

    return (
        <div
            className={`
            ${id === "login"
            ? `w-[220px] md:w-[30%] lg:w-[25%] xl:w-[15%] absolute top-50 md:top-30 lg:top-30 xl:top-30 right-[20%] md:right-[2%] lg:right-[3.5%] xl:right-18 z-[100] bg-white rounded-[10px]
                overflow-hidden transition-all duration-300 shadow-sm
                ${open ? "max-h-[500px] p-5" : "max-h-0 p-0"}`
            : "w-full md:w-[30%] lg:w-[25%] xl:w-[15%] p-0 md:p-5 lg:p-5 xl:p-5"
            }
            `}
        >
            <div className={`${id !== "login" && "grid grid-cols-2" } md:flex md:flex-col border-b border-[#E3F1F3]`}>
                <div className={`order-1 md:order-1 flex items-center gap-3 md:border-b lg:border-b xl:border-b border-[#C2D5FF] ${id === "login" ? "py-3" : "py-5"} cursor-pointer`}
                    onClick={() => navigate("my-acct")}
                >
                    <Image src={person} alt="img" />
                    <p className={`${manrope.className} ${page === "my-acct" ? "text-[#0C6170]" : "text-[#000000]"} text-[14px] md:text-[14px] lg:text-[14px] xl:text-[18px] font-medium`}>My Account</p>
                </div>
                <div className={`order-3 md:order-2 flex items-center gap-3 md:border-b lg:border-b xl:border-b border-[#C2D5FF] ${id === "login" ? "py-3" : "py-5"} cursor-pointer`}
                    onClick={() => navigate("orders")}
                >
                    <Image src={order} alt="img" />
                    <p className={`${manrope.className} ${page === "orders" ? "text-[#0C6170]" : "text-[#000000]"} text-[14px] md:text-[14px] lg:text-[14px] xl:text-[18px] font-medium`}>Orders</p>
                </div>
                <div className={`order-2 md:order-3 flex items-center gap-3 md:border-b lg:border-b xl:border-b border-[#C2D5FF] ${id === "login" ? "py-3" : "py-5"} cursor-pointer`}
                    onClick={() => navigate("pow-finan")}
                >
                    <Image src={discount} alt="img" />
                    <p className={`${manrope.className} ${page === "pow-finan" ? "text-[#0C6170]" : "text-[#000000]"} text-[14px] md:text-[14px] lg:text-[14px] xl:text-[18px] font-medium`}>Power Financing</p>
                </div>
                <div className={`order-4 md:order-4 flex items-center gap-3 ${id === "login" ? "py-3" : "py-5"} cursor-pointer ${id === "login" ? "md:border-b lg:border-b xl:border-b border-[#C2D5FF]" : ""}`}
                    onClick={() => navigate("more")}
                >
                    <Image src={more} alt="img" />
                    <p className={`${manrope.className} ${page === "more" ? "text-[#0C6170]" : "text-[#000000]"} text-[14px] md:text-[14px] lg:text-[14px] xl:text-[18px] font-medium`}>More</p>
                </div>
                {
                    id === "login" && (
                        <div className='order-5 flex items-center gap-3 pt-3 cursor-pointer'
                            onClick={handleTrigger}
                        >
                            <p className={`${manrope.className} ${!isLoggedIn ? "text-[#0C6170]" : "text-[#F94444]"} text-[14px] md:text-[14px] lg:text-[14px] xl:text-[18px] font-medium`}>
                               { !isLoggedIn ? "Login" : "Sign Out" }
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
