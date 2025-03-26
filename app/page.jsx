import Link from "next/link";
import Carousel from "./components/Carousel";
import FloatingLabelInput from "./components/FloatingLabelInput";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />


      {/*    MEET JO SMITH    */}
      
      <section className="bg-accent">
        <div className="w-8/12 py-20 flex justify-between h-full mx-auto">

          <div className="w-1/2 flex flex-col gap-8 h-fit">
            <div className="text-xl relative mb-9">
              <h3>Meet,</h3>
              <h3 className="font-imperial-script text-2-xl ps-5 absolute top-4">Jo Smith</h3>
            </div>

            <div className="flex flex-col gap-8 leading-loose">
              <p>Jo Smith Photography is a leading nature photographer with over eight years experience working within landscape and natural world photography, specialising in the landscapes of Scotland.</p>
              <p className="text-end">Jo's style has developed organically through photographing the wide variety of landscapes and seascapes found around Scotland. Her bold, colourful landscape photographs are always in-demand.</p>
            </div>
          </div>

          <div className="w-2/5 flex items-center justify-center self-stretch bg-gray-300 shadow-lg">
            Portrait
          </div>

        </div>
      </section>


      {/*    GET IN TOUCH FORM    */}

      <section className="w-8/12 py-20 flex items-center justify-between h-full mx-auto">

        <div className="w-2/5 flex flex-col gap-8 h-fit">
          <p className="leading-loose w-3/5">Jo really takes care in putting love in every photo. I couldn't be more pleased with the results!</p>
          <Link href="/testimonials" className="transition-colors hover:bg-black hover:text-white border border-black text-center w-fit px-20 py-3">View All Testimonials</Link>
        </div>

        <div className="w-1/2 flex flex-col gap-10 text-sm">

          <div className="flex flex-col items-end">
            <h5 className="text-base">Like what you see?</h5>
            <h3 className="text-2-lg font-[500]">Let's work together.</h3>
          </div>
          
          <div className="flex flex-col gap-6">
            <FloatingLabelInput inputLabel="Name" inputType="text" max={50} />
            <FloatingLabelInput inputLabel="Email" inputType="email" max={50} />
            <FloatingLabelInput inputLabel="Message" inputType="text" autoComplete="off" max={100} />
          </div>

          <div className="transition-colors hover:bg-accent-light bg-accent w-full">
            <input className="w-full px-3 py-4 h-full outline-0 border-0 cursor-pointer" type="submit" value="Send Message" />
          </div>
          
        </div>

      </section>


      <Footer />
    </>
  );
}
