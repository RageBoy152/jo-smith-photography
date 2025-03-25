'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export default function Navbar() {
  const pathname = usePathname();

  // get mounted state
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // define navigation routes
  const navRoutes = [
    { route: '', text: 'Home' },
    { route: 'about', text: 'About' }
  ];

  return (
    <div>
      {navRoutes.map((route, i) => (
        <Link key={i} href={`/${route.route}`} className={mounted && pathname == `/${route.route}` ? 'text-accent' : ''}>{route.text}</Link>
      ))}
    </div>
  );
}