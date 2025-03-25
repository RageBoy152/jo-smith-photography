'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {
  const pathname = usePathname();

  const navRoutes = [
    { route: '', text: 'Home' },
    { route: 'about', text: 'About' }
  ];

  return (
    <div>
      {navRoutes.map((route, i) => (
        <Link key={i} href={`/${route.route}`} className={pathname == `/${route.route}` ? 'text-accent' : ''}>{route.text}</Link>
      ))}
    </div>
  );
}