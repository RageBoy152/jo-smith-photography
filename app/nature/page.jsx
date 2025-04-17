import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Masonary from "../components/Masonary";
import { fetchImagesFromUnsplash } from "../utils/unsplash";
import Head from "next/head";
import CookiesModal from "../components/CookiesModal";
import Image from "next/image";



export default async function Nature() {
  // get images for masonary from unsplash
  const images = await fetchImagesFromUnsplash("scottish nature", 16);



  return (
    <>
      <Head>
        <title>Jo Smith Photography | Nature Portfolio</title>
        <meta name="description" content="Browse Jo Smith's nature photography portfolio. Stunning Scottish landscapes and seascapes captured through bold colour and natural beauty." />
        <meta name="keywords" content="nature photography Scotland, Scottish landscapes, Jo Smith nature photos, landscape photographer Dundee, seascape photography, Scotland nature shots, outdoor photography portfolio, Jo Smith Photography nature, bold nature photography, scenic Scotland photos" />
      </Head>
      <CookiesModal />

      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white h-[300px] flex items-center justify-center text-xl">
        <Image src="/images/nature/nature-hero.jpg" alt="Beautiful Scottish mountainous landscape" fill={true} priority={true} className="absolute select-none brightness-50 object-cover" />
        <h1 className="z-10 text-2-lg text-center px-5">Jo's Nature Photography</h1>
      </section>



      {/*    MASONARY    */}

      <section className="bg-accent">
        <Masonary images={images} />
      </section>
      
      <Footer />
    </>
  );
}
