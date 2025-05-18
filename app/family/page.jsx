// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Masonary from "../components/Masonary";
import CookiesModal from "../components/CookiesModal";
import Image from "next/image";

// unsplash
import { fetchImagesFromUnsplash } from "../utils/unsplash";


export const metadata = {
  title: "Family Portfolio",
  description: "View Jo Smith's family photography portfolio. Heartwarming portraits of babies, children, and families taken with care, creativity, and experience.",
  keywords: [
    "family portraits Dundee",
    "baby photos Dundee",
    "children photography Scotland",
    "Jo Smith family portfolio",
    "classic family portraits",
    "child photography studio",
    "lifestyle family photographer",
    "Jo Smith Photography family",
    "Dundee kids photographer",
    "family photo session"
  ]
}



export default async function Family() {
  // get images for masonary from unsplash
  const images = await fetchImagesFromUnsplash("family", 16);



  return (
    <>
      <CookiesModal />
      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white h-dvh md:h-[700px] flex items-center justify-center text-xl">
        <Image src="/images/family/family-hero.jpg" alt="Family lined up at the beach during sunset" fill={true} priority={true} className="absolute select-none brightness-50 object-cover" />
        <h1 className="z-10 text-2-lg text-center px-5">Jo's Family Photography</h1>
      </section>


      {/*    FEATURED    */}

      <section className="relative z-100 flex flex-col lg:flex-row gap-10 lg:gap-0 w-10/12 -mt-40 pb-20 mx-auto">

        <div className="w-full lg:w-7/12">
          <div className="aspect-[3/2] flex items-center justify-center mx-auto bg-gray-300 shadow-lg">
            <img className="w-full h-full object-cover" src="/images/family/featured-1.jpg" alt="Man with baby girl on lap sitting on a dock" />
          </div>
        </div>

        <div className="lg:bg-body lg:shadow-lg lg:absolute bottom-25 end-0 lg:me-30 p-3 h-fit w-full lg:w-1/2 flex flex-col gap-4 leading-loose">
          <p>Jo has years of experience in producing beautiful classic portraits of children and their families to be treasured.</p>
          <p>No matter how many children you have, I can love to get to know them and capture their personalities. I take pictures of little people that show how beautiful they are.</p>
        </div>

      </section>


      {/*    MASONARY    */}

      <section className="bg-accent">
        <Masonary images={images} />
      </section>
      
      <Footer />
    </>
  );
}
