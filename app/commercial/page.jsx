// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Masonary from "../components/Masonary";
import CookiesModal from "../components/CookiesModal";
import Image from "next/image";

// unsplash
import { fetchImagesFromUnsplash } from "../utils/unsplash";


export const metadata = {
  title: "Commercial Portfolio",
  description: "Explore Jo Smith's commercial photography work. Professional product and branding images that elevate your business visuals with a creative touch.",
  keywords: [
    "commercial photography Dundee",
    "branding photographer",
    "Jo Smith commercial work",
    "product photography Scotland",
    "business photography",
    "brand images Dundee",
    "promotional photos",
    "Jo Smith Photography commercial",
    "marketing visuals",
    "professional business photos"
  ]
}


export default async function Commercial() {
  // get images for masonary from unsplash
  const images = await fetchImagesFromUnsplash("commercial product", 16);



  return (
    <>
      <CookiesModal />
      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white h-[300px] flex items-center justify-center text-xl">
        <Image src="/images/commercial/commercial-hero.jpg" alt="Clean polished iphone resting on macbook" fill sizes="100vw" priority className="absolute select-none brightness-50 object-cover" />
        <h1 className="z-10 text-2-lg text-center px-5">Jo's Commercial Photography</h1>
      </section>



      {/*    MASONARY    */}

      <section className="bg-accent">
        <Masonary images={images} />
      </section>
      
      <Footer />
    </>
  );
}
