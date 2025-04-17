import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Masonary from "../components/Masonary";
import { fetchImagesFromUnsplash } from "../utils/unsplash";
import CookiesModal from "../components/CookiesModal";
import Head from "next/head";
import Image from "next/image";



export default async function Commercial() {
  // get images for masonary from unsplash
  const images = await fetchImagesFromUnsplash("commercial product", 16);



  return (
    <>
      <Head>
        <title>Jo Smith Photography | Commercial Portfolio</title>
        <meta name="description" content="Explore Jo Smith's commercial photography work. Professional product and branding images that elevate your business visuals with a creative touch." />
        <meta name="keywords" content="commercial photography Dundee, branding photographer, Jo Smith commercial work, product photography Scotland, business photography, brand images Dundee, promotional photos, Jo Smith Photography commercial, marketing visuals, professional business photos" />
      </Head>
      <CookiesModal />

      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white h-[300px] flex items-center justify-center text-xl">
        <Image src="/images/commercial/commercial-hero.jpg" alt="Clean polished iphone resting on macbook" fill={true} priority={true} className="absolute select-none brightness-50 object-cover" />
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
