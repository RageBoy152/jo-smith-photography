// components
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactMessageForm from "./components/ContactMessageForm";
import Quote from "./components/Quote";
import CookiesModal from "./components/CookiesModal";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <CookiesModal />
      <Navbar />
      
      <Carousel />


      {/*    MEET JO SMITH    */}
      
      <section className="bg-accent">
        <div className="w-8/12 py-20 flex flex-col lg:flex-row justify-between h-full mx-auto">

          <div className="lg:w-1/2 flex flex-col gap-8 h-fit">
            <div className="text-xl relative mb-9">
              <h3>Meet,</h3>
              <h3 className="font-imperial-script text-2-xl ps-5 absolute top-4">Jo Smith</h3>
            </div>

            <div className="flex flex-col gap-8 leading-loose">
              <p>Jo Smith Photography is a leading nature photographer with over eight years experience working within landscape and natural world photography, specialising in the landscapes of Scotland.</p>
              
              <div className="lg:hidden w-5/6 aspect-[4/5] flex items-center justify-center mx-auto bg-gray-300 shadow-lg">
                <img src="/images/home/jo-smith.jpg" alt="Jo Smith photographer portrait" className="w-full h-full object-cover" />
              </div>
              
              <p className="text-end">Jo's style has developed organically through photographing the wide variety of landscapes and seascapes found around Scotland. Her bold, colourful landscape photographs are always in-demand.</p>
            </div>
          </div>

          <div className="hidden lg:flex h-100 aspect-4/5 items-center justify-center bg-gray-300 shadow-lg">
            <img src="/images/home/jo-smith.jpg" alt="Jo Smith photographer portrait" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>


      {/*    GET IN TOUCH FORM    */}

      <section className="w-8/12 py-20 flex flex-col lg:flex-row gap-15 lg:gap-0 items-center justify-between h-full mx-auto">

        <div className="w-full lg:w-2/6 flex flex-col h-fit">
          <div className="w-full aspect-square -mb-20">
            <img className="w-full h-full object-cover rounded-full shadow-lg home-testimonial-image-masked" src="/images/home/featured-testimonial.jpg" alt="Happy couple enjoying the moment" />
          </div>
          <div className="z-5 w-full flex flex-col gap-8">
            <Quote quote="Jo's talent is unmatched! She captured every moment so naturally, making our photos feel alive and full of emotion. We will cherish them forever." person="Daniel & Sarah M." aligned="left" stretch={true} />
            <Link href="/testimonials" className="transition-colors hover:bg-black hover:text-white border border-black text-center w-full xl:w-4/5 py-3">View All Testimonials</Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-10 text-sm">

          <div className="flex flex-col lg:items-end">
            <h5 className="text-base">Like what you see?</h5>
            <h3 className="text-2-lg font-[500]">Let's work together.</h3>
          </div>
          
          <ContactMessageForm />
          
        </div>

      </section>


      <Footer />
    </>
  );
}
