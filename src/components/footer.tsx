import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
    products: [
      { label: 'Solar Panels', href: '/products?category=SOLAR_PANEL' },
      { label: 'Inverters', href: '/products?category=INVERTER' },
      { label: 'Batteries', href: '/products?category=BATTERY' },
      { label: 'Wind Turbines', href: '/products?category=WIND_TURBINE' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Warranty', href: '/warranty' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#1B4D54] text-white/60 py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-10">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-4xl font-bold text-white uppercase ">
                julo<span className="text-[#00BFA5]">.</span>
              </span>
            </Link>
            <p className="text-xl font-medium leading-relaxed max-w-sm text-white/80">
              Powering sustainable futures across Nigeria with premium solar solutions and smart energy management.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#00BFA5] hover:text-[#1B4D54] transition-all duration-300 shadow-xl"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 lg:col-span-3 gap-12 lg:gap-24">
            <div>
              <h3 className="text-white font-bold uppercase text-xs  mb-10 opacity-40">Solutions</h3>
              <ul className="space-y-6">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-bold text-white/70 hover:text-[#00BFA5] transition-colors uppercase ">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase text-xs  mb-10 opacity-40">Support</h3>
              <ul className="space-y-6">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-bold text-white/70 hover:text-[#00BFA5] transition-colors uppercase ">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] font-bold uppercase  text-white/40">
            <span>© {new Date().getFullYear()} JULO ENERGY</span>
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[#00BFA5] font-bold text-[11px] uppercase ">
            <span>ENGINEERED FOR EXCELLENCE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            <span>NIGERIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
