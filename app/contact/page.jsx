// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLink from "../components/SocialLink";
import ContactMessageForm from "../components/ContactMessageForm";
import CookiesModal from "../components/CookiesModal";
import Image from "next/image";


export const metadata = {
  title: "Contact",
  description: "Get in touch with Jo Smith Photography in Dundee to book your next photo session. Email, visit the studio, or follow Jo on Instagram, X, and more.",
  keywords: [
    "contact Jo Smith",
    "Dundee photography studio",
    "book photo session",
    "photography enquiries Dundee",
    "Jo Smith email",
    "photography contact page",
    "professional photographer Dundee",
    "get in touch Jo Smith",
    "photography address Dundee",
    "follow Jo Smith"
  ]
}


export default function Contact() {
  return (
    <>
      <CookiesModal />
      <Navbar />


      {/*    HERO    */}

      <section className="relative text-white min-h-[700px] flex flex-col gap-12 py-40 items-center justify-center">
        <Image src="/images/contact/contact-hero.jpg" alt="Beautiful hazy mountainous landscape" fill={true} priority={true} className="absolute select-none brightness-50 object-cover" />
        <h1 className="font-imperial-script text-2-xl z-10 text-center">Send me a message</h1>

        <div className="z-10 w-10/12 md:w-1/2 lg:w-2/6 text-black">
          <ContactMessageForm onHero={true} />
        </div>
      </section>
      

      {/*    VISIT IN PERSON    */}

      <section>
        <div className="w-10/12 md:w-8/12 py-20 flex flex-col gap-18 mx-auto">

          <div className="text-center">
            <h1 className="font-imperial-script text-2-xl">Visit in Peron</h1>
            <p>Explore my Gallery here and browse framed photographs for sale.</p>
          </div>

          <div className="w-full aspect-[2/3] sm:aspect-[3/2] md:aspect-[4/2] bg-gray-300 shadow-lg relative">
            <div className="absolute top-0 start-0 w-full h-full flex items-center justify-center">
              <p>Loading map...</p>
            </div>

            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1KZy_RcbZc-wCV-gy20-eKng1qxOkIbY&ehbc=2E312F&noprof=1" className="w-full h-full relative z-5"></iframe>
          </div>

        </div>
      </section>


      {/*    SOCIAL MEDIA    */}

      <section className="bg-accent">
        <div className="w-8/12 mx-auto flex flex-col gap-12 py-20 items-center text-center">
          <h2 className="text-xl">Find me on Social Media</h2>
          
          <div className="w-full lg:px-40 flex flex-col sm:flex-row gap-5 justify-around text-sm">
            <SocialLink handle="josmithphoto" imageAlt="Pinterest" imagePath="icons/pinterest.svg" />
            <SocialLink handle="josmithphoto" imageAlt="X / Twitter" imagePath="icons/x-twitter.svg" />
            <SocialLink handle="josmithphoto" imageAlt="Instagram" imagePath="icons/instagram.svg" />
          </div>
        </div>
      </section>

      
      <Footer />
    </>
  );
}
