'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";



export default function Navbar() {
  const pathname = usePathname();
  const [navbarActive, setNavbarActive] = useState(false);


  const portfolioPages = ["weddings", "family", "nature", "commercial"];


  function generateLinkClasses(linkPath) {
    return `w-1/2 lg:w-fit text-center lg:text-start transition-colors px-3 ${pathname == linkPath ? 'text-accent' : 'hover:text-accent-light'}`;
  }


  return (
    <div className="absolute z-100 w-full">
      <nav className="font-imperial-script text-white text-2-lg w-10/12 flex flex-col lg:flex-row items-start lg:items-center justify-between py-5 mx-auto">

        <div className="w-full lg:w-fit flex justify-between lg:me-8">
          <Link href="/" className="lg:leading-8">Jo Smith Photography</Link>
          <p onClick={() => setNavbarActive(!navbarActive)} className="lg:hidden transition-colors hover:text-accent cursor-pointer flex items-center self-stretch"><i className="bi bi-list"></i></p>
        </div>

        <div className={`transition-opacity ${!navbarActive ? 'pointer-events-none opacity-0' : ''} lg:pointer-events-auto lg:opacity-100 nav-bg-gradient lg:bg-none absolute lg:relative top-full start-0 px-20 lg:px-0 py-10 lg:py-0 w-full lg:w-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8`}>
          <Link href="/" className={generateLinkClasses('/')}>Home</Link>

          <div className="relative group w-1/2 bg:w-auto">
            <p className={`${(portfolioPages.find((page) => `/${page}` == pathname) != null) ? 'text-accent' : 'hover:text-accent-light'} hidden lg:flex justify-start items-center gap-3 px-3 cursor-pointer`}>Portfolio <i className="bi bi-chevron-down hidden lg:flex text-sm"></i></p>

            <div className="transition-opacity lg:pointer-events-none group-hover:pointer-events-auto lg:opacity-0 group-hover:opacity-100 w-full flex flex-col items-center lg:items-start lg:absolute top-full">
              {portfolioPages.map((page, i) => 
                <Link key={i} href={`/${page}`} className={generateLinkClasses(`/${page}`)}>{page.charAt(0).toUpperCase() + page.slice(1)}</Link>
              )}
            </div>
          </div>

          <Link href="/packages" className={generateLinkClasses('/packages')}>Packages</Link>
          <Link href="/testimonials" className={generateLinkClasses('/testimonials')}>Testimonials</Link>
          <Link href="/contact" className={generateLinkClasses('/contact')}>Contact</Link>
        </div>
      </nav>
    </div>
  );
}