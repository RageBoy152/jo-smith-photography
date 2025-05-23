'use client'; 


// components
import SocialLink from "./SocialLink";
import Link from "next/link";

// hooks
import { usePathname } from "next/navigation";


export default function Footer() {
  const pathname = usePathname();


  function generateLinkClasses(linkPath) {
    return `transition-colors px-3 ${pathname == linkPath ? 'text-accent' : 'hover:text-accent-dark'}`;
  }


  return (
    <footer className="bg-white border-t border-black px-4 py-8 flex flex-col gap-10 items-center">
      <h2 className="font-imperial-script text-2-xl text-center">Jo Smith Photography</h2>

      <div className="flex flex-col gap-2 text-center">
        <Link href="/weddings" className={generateLinkClasses('/weddings')}>Weddings</Link>
        <Link href="/family" className={generateLinkClasses('/family')}>Family</Link>
        <Link href="/nature" className={generateLinkClasses('/nature')}>Nature</Link>
        <Link href="/commercial" className={generateLinkClasses('/commercial')}>Commercial</Link>
      </div>

      <div className="w-1/2 flex flex-col sm:flex-row gap-5 justify-around text-sm">
        <SocialLink handle="josmithphoto" imageAlt="Pinterest" imagePath="icons/pinterest.svg" />
        <SocialLink handle="josmithphoto" imageAlt="X / Twitter" imagePath="icons/x-twitter.svg" />
        <SocialLink handle="josmithphoto" imageAlt="Instagram" imagePath="icons/instagram.svg" />
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <a href="mailto:enquire@josmithphoto.com" className="transition-colors hover:text-accent-dark">enquire@josmithphoto.com</a>
        <p className="text-black/50">&copy; JoSmithPhotography, 2025</p>
      </div>
    </footer>
  );
}