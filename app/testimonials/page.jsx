import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import Head from "next/head";
import CookiesModal from "../components/CookiesModal";
import Image from "next/image";



export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Jo Smith Photography | Testimonials</title>
        <meta name="description" content="Read reviews and testimonials from happy clients of Jo Smith Photography. Discover why families, couples, and nature lovers trust Jo for their special moments." />
        <meta name="keywords" content="Jo Smith reviews, photography testimonials, Dundee photographer feedback, wedding photo reviews, family portraits testimonials, happy clients, photography recommendations, photo session experiences, professional photography praise, client stories" />
      </Head>
      <CookiesModal />

      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white min-h-[700px] flex flex-col gap-12 md:gap-6 py-40 items-center justify-center">
        <Image src="/images/testimonials/testimonials-hero.jpg" alt="Bride and groom walking into the sunset on the beach" fill={true} priority={true} className="absolute select-none brightness-50 object-cover" />
        <h1 className="font-imperial-script text-2-xl z-10 text-center">Hear from pleased clients</h1>

        <div className="z-10 w-8/12 flex flex-col md:flex-row gap-18 md:gap-0 items-center md:items-stretch justify-around">

          <Quote quote="I loved working with Jo. She's great at bringing out everyone's character and including their personalities in the final photo." person="Sophie L." aligned="left" />
          <Quote quote="It was a blast working with you and meeting the family. I'm very glad you enjoyed the experience as much as I did photographing it. Thank you for the kind words!" person="Jo Smith" aligned="right" stacked={true} />
          
        </div>
      </section>


      {/*    FEATURED TESTIMONIALS    */}

      <section>
        <div className="w-8/12 py-20 flex flex-col gap-18 md:gap-12 mx-auto">

          <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row w-full items-center">
            <div className="w-full md:w-1/2">
              <div className="w-3/4">
                <Quote quote="Jo has an incredible eye for detail and made us feel so comfortable throughout the shoot. Every photo tells a story, and we couldn't be happier with how they turned out!" person="Emily R." aligned="left" stretch={true} />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="w-3/4 aspect-[3/2] ms-auto md:me-auto bg-gray-300 shadow-lg">
                <img className="w-full h-full object-cover text-center text-black/30" src="/images/testimonials/featured-testimonial-1.jpg" alt="Image" />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row-reverse w-full items-center">
            <div className="w-full md:w-1/2">
              <div className="w-3/4 ms-auto">
                <Quote quote="From start to finish, Jo made the entire experience effortless and fun. The photos are simply stunning, and I can't wait to book with her again!" person="Olivia T." aligned="right" stretch={true} />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="w-3/4 aspect-[3/2] me-auto md:ms-auto bg-gray-300 shadow-lg">
                <img className="w-full h-full object-cover text-center text-black/30" src="/images/testimonials/featured-testimonial-2.jpg" alt="Image" />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/*    MORE TESTIMONIALS    */}

      <section className="bg-accent">
        <div className="w-8/12 py-20 flex flex-col md:flex-row gap-18 md:gap-0 justify-around mx-auto">

          <div className="w-full md:w-2/6">
            <Quote quote="Jo really takes care in putting love in every photo. I couldn't be more pleased with the results!" person="John Doe" aligned="center" stretch={true} />        
          </div>

          <div className="w-full md:w-2/6">
            <Quote quote="Jo really takes care in putting love in every photo. I couldn't be more pleased with the results!" person="John Doe" aligned="center" stretch={true} />        
          </div>

        </div>
      </section>

      
      <Footer />
    </>
  );
}
