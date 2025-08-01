'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'About Me', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
            <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#fab910]" />
                <h1 className="text-xl font-bold">Purva Zinjarde</h1>
                <span className="text-md text-gray-700">| &nbsp; &nbsp; SOFTWARE ENGINEER</span>
            </div>
            <nav className="space-x-8 text-sm font-medium tracking-wide uppercase">
                {navItems.map(({ label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`hover:text-[#fab910] transition-colors ${pathname === href ? 'text-[#fab910] underline underline-offset-4 font-bold' : 'text-[#1c2340]'
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
