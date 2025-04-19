'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

 



export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselRef = useRef(null);
  const slidesContainer = useRef(null);
  const slideRefs = useRef([]);

  const dev_carouselAutoScroll = true;



  const slides = [
    {
      heroText: "Beautiful Wedding Photography",
      imagePath: "/images/home/wedding-hero.jpg",
      imageAlt: "Scenic wedding couple holding hands photograph",
      href: "/weddings"
    },
    {
      heroText: "Loving Family Photography",
      imagePath: "/images/home/family-hero.jpg",
      imageAlt: "Family photograph on the beach",
      href: "/family"
    },
    {
      heroText: "Peaceful Nature Photography",
      imagePath: "/images/home/nature-hero.jpg",
      imageAlt: "Sunflower field photograph nature",
      href: "/nature"
    },
    {
      heroText: "Powerful Commercial Photography",
      imagePath: "/images/home/commercial-hero.jpg",
      imageAlt: "Cooked chicken with vegetables food photograph",
      href: "/commercial"
    }
  ];



  // left/right arrows on nav
  const decActiveSlide = () => {
    setActiveSlide(prev => {
      let newSlide = prev == 0 ? slides.length - 1 : prev - 1;

      scrollToSlide(newSlide);
      return newSlide;
    });
  };

  const incActiveSlide = () => {    
    setActiveSlide((prev) => {
      let newSlide = (prev + 1) % slides.length;

      scrollToSlide(newSlide);
      return newSlide;
    });
  };



  const scrollToSlide = (slideIndex) => {
    // make sure we have slides container and select slide to scroll to
    if (!slidesContainer.current) return;
    const slide = slideRefs.current[slideIndex];
    
    if (slide) {
      // get slide pos relative to container
      const slidePosition = slide.offsetLeft;

      // scroll container to slide pos
      slidesContainer.current.scrollTo({
        left: slidePosition,
        behavior: "smooth"
      });
    }
  }



  useEffect(() => {
    if (!dev_carouselAutoScroll) return;
    
    const autoScrollIntervalId = setInterval(async () => {
      // dont auto scroll if we're hovering over carousel
      if (carouselRef.current.matches(':hover')) return;


      // return to slide 0
      if (activeSlide == slides.length-1) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        scrollToSlide(0);
        setActiveSlide(0);
        return;
      }

      incActiveSlide();

      return () => clearInterval(autoScrollIntervalId);

    }, 3000);
  }, []);



  return (
    <section ref={carouselRef} className="relative text-white h-dvh md:h-[700px]">


      {/*   NAVIGATION   */}

      <div className="absolute z-15 pointer-events-none w-full h-full flex items-end lg:items-center">
        <div className="w-10/12 h-fit flex items-center justify-between mx-auto text-2-lg">
          <div onClick={decActiveSlide} className="pointer-events-auto cursor-pointer transition-colors hover:bg-black/20 flex ps-5 pe-10 lg:px-15 py-30 lg:py-40"><i className="bi bi-chevron-left"></i></div>
          <div onClick={incActiveSlide} className="pointer-events-auto cursor-pointer transition-colors hover:bg-black/20 flex pe-5 ps-10 lg:px-15 py-30 lg:py-40"><i className="bi bi-chevron-right"></i></div>
        </div>
      </div>

      <div className="absolute z-15 pointer-events-none w-full h-full flex items-end">
        <div className="w-10/12 h-fit pointer-events-auto flex justify-center my-15 gap-4 mx-auto text-xs">
          {slides.map((slide, i) => (
            <a key={i} href={`#slide-${i}`} onClick={() => setActiveSlide(i)} className="cursor-pointer"><i className={`bi ${i == activeSlide ? 'bi-circle-fill' : 'bi-circle'}`}></i></a>
          ))}
        </div>
      </div>



      {/*   SLIDES   */}

      <section ref={slidesContainer} className="flex w-dvw h-full overflow-x-hidden scroll-smooth">

        {slides.map((slide, i) => (
          <div ref={(el) => slideRefs.current[i] = el} key={i} id={`slide-${i}`} className="w-dvw h-full relative flex-shrink-0">
            <div className="absolute z-10 flex flex-col gap-2 items-center justify-center w-full h-full text-2-lg text-center">
              <Link href={slide.href} className="transition-all transition-tracking hover:text-accent hover:-tracking-[-10px]">{slide.heroText}</Link>
              <h3 className="font-imperial-script">By Jo Smith</h3>
            </div>

            <Image src={slide.imagePath} alt={slide.imageAlt} fill={true} priority={true} className="absolute select-none brightness-50 object-cover" />
          </div>
        ))}

      </section>


    </section>
  );
}