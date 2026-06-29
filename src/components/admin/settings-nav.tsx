import { Building2, CreditCard, Bell, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SettingsNavProps {
  current?: string;
}

export function SettingsNav({ current }: SettingsNavProps) {
  const pathname = usePathname();

  const links = [
    { name: 'General', href: '/admin/settings', icon: Building2 },
    { name: 'Payments & Taxes', href: '/admin/settings/payments', icon: CreditCard },
    { name: 'Notifications', href: '/admin/settings/notifications', icon: Bell },
    { name: 'Security & Integrations', href: '/admin/settings/security', icon: Shield },
  ];

  return (
    <div className="flex flex-col gap-1 w-full">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href || (pathname === '/admin/settings' && link.href === '/admin/settings');
        // Handle exact match because /admin/settings would match all sub-paths otherwise
        const actuallyActive = pathname === link.href;

        return (
          <Link key={link.href} href={link.href} passHref>
            <Button
              variant={actuallyActive ? 'secondary' : 'ghost'}
              className={`w-full justify-start ${actuallyActive
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              <Icon className="mr-2 h-4 w-4 text-gray-500" /> {link.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
