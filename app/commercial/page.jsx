import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Masonary from "../components/Masonary";
import { fetchImagesFromUnsplash } from "../utils/unsplash";



export default async function Commercial() {
  // get images for masonary from unsplash
  const images = await fetchImagesFromUnsplash("commercial product", 16);



  return (
    <>
      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white h-[300px] flex items-center justify-center text-xl">
        <img src="./commercial/commercial-hero.jpg" alt="" className="absolute w-full h-full object-cover select-none brightness-50" />
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
