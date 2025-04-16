import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import Link from "next/link";



export default function Packages() {
  const packages = [
    {
      name: "Classic",
      description: "Choose your favourite image to be printed at 12 x 8”.",
      price: 60,
      type: "print",
      thumbnailPath: "/packages/classic.jpg"
    },
    {
      name: "Extra Large",
      description: "Choose your favourite image to be printed at 18 x 12”.",
      price: 80,
      type: "print",
      thumbnailPath: "/packages/xlarge.jpg"
    },
    {
      name: "Big Value Bundle",
      description: "Choose your favourite image to be printed at 18 x 12” plus 2 others at 12x8″.",
      price: 125,
      type: "print",
      thumbnailPath: "/packages/bigvaluebundle.jpg"
    },
    {
      name: "10 Pack",
      description: "Choose your ten favourite images online, in your own time and in the peace of your own home. Your chosen images will be fully retouched and supplied digitally.",
      price: 190,
      type: "digital",
      thumbnailPath: "/packages/10digital.jpg"
    },
    {
      name: "20 Pack",
      description: "Choose your 25 favourite images online, in your own time and in the peace of your own home. Your chosen images will be fully retouched and supplied digitally.",
      price: 250,
      type: "digital",
      thumbnailPath: "/packages/20digital.jpg"
    },
  ];



  return (
    <>
      <Navbar />


      {/*    HERO / PRINTS    */}

      <section className="relative text-white min-h-dvh py-40 flex flex-col gap-18 items-center justify-center">
        <img src="./packages/packages-hero.jpg" alt="" className="absolute w-full h-full object-cover select-none brightness-50" />
        
        <div className="z-10 text-center w-10/12 lg:w-1/2">
          <h1 className="font-imperial-script text-2-xl mb-4">Affordable, personalized packages</h1>
          <p>Each package comes with a personalized experience featuring an hour-long professional photo studio session. In your session, you can choose different outfits, styles and backgrounds to find the style you want.</p>
        </div>


        <div className="z-10 w-10/12 xl:w-8/12">
          <h1 className="font-imperial-script text-center text-2-xl mb-4">Prints</h1>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-center lg:items-stretch justify-evenly">
            {packages.filter((pkg) => pkg.type == "print").map((pkg, i) => 
              <PackageCard key={i} pkg={pkg} />
            )}
          </div>
        </div>
      </section>


      {/*    DIGITALS    */}

      <section className="relative min-h-[700px] py-20 flex items-center justify-center">
        <img src="./packages/packages-digital-bg.jpg" alt="" className="absolute w-full h-full object-cover select-none brightness-50" />

        <div className="z-10 w-10/12 lg:w-8/12 flex flex-col gap-12">
          <h1 className="font-imperial-script text-center text-2-xl text-white">Digitals</h1>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-center lg:items-stretch justify-evenly">
            {packages.filter((pkg) => pkg.type == "digital").map((pkg, i) => 
              <PackageCard key={i} pkg={pkg} />
            )}
          </div>
        </div>
      </section>


      {/*    VOUCHERS    */}

      <section className="bg-accent py-20">
        <div className="w-8/12 mx-auto flex flex-col gap-8 items-center text-center">
          <h2 className="font-imperial-script text-2-xl">Studio Vouchers</h2>
          <p>If you'd like to buy a gift voucher, <Link href="/contact" className="transition-colors text-accent-dark hover:underline hover:text-gray-700">Contact Me</Link> and I'll arrange to post one directly to you.</p>
        </div>
      </section>

      
      <Footer />
    </>
  );
}
