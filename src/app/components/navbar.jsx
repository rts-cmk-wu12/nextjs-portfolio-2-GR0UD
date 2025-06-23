"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://linkedin.com", icon: FaLinkedinIn },
  { href: "https://behance.net", icon: FaBehance },
  { href: "https://twitter.com", icon: FaTwitter },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='w-full bg-[#1B1B1B] border-b border-zinc-800 py-5 flex justify-between items-center max-w-[1100px] mx-auto rounded-b-xl'>
      <nav className='w-full flex justify-between items-center mx-auto max-w-[900px]'>
        <ul className='flex gap-15'>
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-small transition-colors ${
                    isActive
                      ? "text-[#62BA1B]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className='flex space-x-5'>
          {socials.map(({ href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='
                text-[rgba(255,255,255,0.3)]
                 hover:text-[#62BA1B] transition-colors'
              >
                <Icon size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
