'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export default function Navbar() {
  const pathname = usePathname();
  const [navbarActive, setNavbarActive] = useState(false);



  useEffect(() => {
    // prevents scrolling on page when mobile navbar active

    if (navbarActive) document.body.classList.add("scroll-lock");
    else document.body.classList.remove("scroll-lock");

    return () => { document.body.classList.remove("scroll-lock"); }
  }, [navbarActive]);



  const portfolioPages = ["weddings", "family", "nature", "commercial"];


  function generateLinkClasses(linkPath) {
    return `w-full lg:w-fit text-center lg:text-start transition-colors px-3 ${pathname == linkPath ? 'text-accent' : 'hover:text-accent-light'}`;
  }


  return (
    <div className="absolute z-[150] w-full">
      <nav className="font-imperial-script text-white text-2-lg w-10/12 flex flex-col lg:flex-row items-start lg:items-center justify-between pb-5 lg:py-5 mx-auto">

        <div className={`${navbarActive ? "bg-black" : "bg-none"} lg:bg-transparent py-5 lg:py-0 w-full lg:w-fit flex justify-between lg:me-8 z-50`}>
          <Link href="/" className="lg:leading-8">Jo Smith Photography</Link>
          <p onClick={() => setNavbarActive(!navbarActive)} className="lg:hidden transition-colors hover:text-accent cursor-pointer flex items-center self-stretch"><i className={`bi ${navbarActive ? "bi-x" : "bi-list"}`}></i></p>
        </div>

        <div className={`transition-opacity ${!navbarActive ? 'pointer-events-none opacity-0' : 'pointer-events-all'} lg:pointer-events-auto lg:opacity-100 h-dvh lg:h-auto bg-black lg:bg-transparent w-full lg:w-auto overflow-y-auto lg:overflow-y-visible absolute lg:relative top-0 start-0 px-5 lg:px-0 py-35 lg:py-0`}>
          <div className={`w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 relative`}>
            <Link href="/" className={generateLinkClasses('/')}>Home</Link>

            <div className="relative group w-full bg:w-auto">
              <p className={`${(portfolioPages.find((page) => `/${page}` == pathname) != null) ? 'text-accent' : 'hover:text-accent-light'} hidden lg:flex justify-start items-center gap-3 px-3 cursor-pointer`}>Portfolio <i className="bi bi-chevron-down text-sm"></i></p>

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
        </div>
      </nav>
    </div>
  );
}