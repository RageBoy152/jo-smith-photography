'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {
  const pathname = usePathname();


  function generateLinkClasses(linkPath) {
    return `transition-colors px-3 ${pathname == linkPath ? 'text-accent' : 'hover:text-accent-light'}`;
  }


  return (
    <div className="absolute z-100 w-full">
      <nav className="font-imperial-script text-white text-2-lg w-10/12 py-5 mx-auto flex items-center justify-center">

        <div className="w-3/12">
          <p className="pointer-events-none select-none">Jo Smith Photography</p>
        </div>

        <div className="flex justify-center gap-8 w-6/12">
          <Link href="/" className={generateLinkClasses('/')}>Home</Link>

          <div className="relative group">
            <p className="flex items-center gap-3 px-3 cursor-pointer">Portfolio <i className="bi bi-chevron-down flex text-sm"></i></p>

            <div className="transition-opacity absolute top-full w-full flex flex-col pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
              <Link href="/weddings" className={generateLinkClasses('/weddings')}>Weddings</Link>
              <Link href="/family" className={generateLinkClasses('/family')}>Family</Link>
              <Link href="/nature" className={generateLinkClasses('/nature')}>Nature</Link>
              <Link href="/commercial" className={generateLinkClasses('/commercial')}>Commercial</Link>
            </div>
          </div>

          <Link href="/packages" className={generateLinkClasses('/packages')}>Packages</Link>
          <Link href="/testimonials" className={generateLinkClasses('/testimonials')}>Testimonials</Link>
          <Link href="/contact" className={generateLinkClasses('/contact')}>Contact</Link>
        </div>

        <div className="w-3/12"></div>
      </nav>
    </div>
  );
}