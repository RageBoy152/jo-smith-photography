import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Weddings() {
  return (
    <>
      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white h-[700px] flex items-center justify-center text-xl">
        <img src="./weddings/weddings-hero.jpg" alt="" className="absolute w-full h-full object-cover select-none brightness-50" />
        <h1 className="z-10">Jo's Wedding Photography</h1>
      </section>


      {/*    FEATURED    */}

      <section className="relative z-100 flex flex-col lg:flex-row gap-10 lg:gap-0 w-10/12 -mt-40 pb-20 mx-auto">

        <div className="w-full lg:w-1/2">
          <div className="w-4/5 aspect-[2/3] flex items-center justify-center mx-auto bg-gray-300 shadow-lg">
            <img className="w-full h-full object-cover" src="./weddings/featured-1.jpg" alt="" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:mt-60 ms-auto gap-8 leading-loose">
          <p>Intuition and spontaneity are two key ingredients that I believe are crucial in making a great wedding photographer - the third ingredient is experience.</p>
          <p>Experience to know how to get great shots in pouring rain and gloomy light. The experience to know where to position yourself to get key shots during a day that might have been years in the planning. The experience to know how to get the very best from you and your guests.</p>

          <div className="w-full aspect-[3/2] flex items-center justify-center mx-auto bg-gray-300 shadow-lg">
            <img className="w-full h-full object-cover" src="./weddings/featured-2.jpg" alt="" />
          </div>
        
        </div>

      </section>


      {/*    MASONARY    */}

      <section className="bg-accent">
        <div className="w-10/12 flex py-5 mx-auto">
          <p>masonary - add this.</p>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
