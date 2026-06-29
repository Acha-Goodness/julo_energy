import { Bell, Search, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search products, orders, customers..." 
            className="pl-9 bg-gray-50 border-transparent focus-visible:bg-white focus-visible:ring-[#006B5D]"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-4">
        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-gray-900">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
        
        <div className="h-8 w-px bg-gray-200 mx-2" />
        
        <Button variant="ghost" className="flex items-center gap-2 px-2 hover:bg-gray-50">
          <UserCircle className="h-8 w-8 text-gray-400" />
          <div className="flex flex-col items-start -translate-y-px">
            <span className="text-sm font-medium leading-none">Admin User</span>
            <span className="text-xs text-gray-500 mt-1 leading-none">Superadmin</span>
          </div>
        </Button>
      </div>
    </header>
  );
}
