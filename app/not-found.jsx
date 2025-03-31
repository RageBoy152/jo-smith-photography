import Link from "next/link";



export default function NotFound() {
  return (
    <section className="relative text-white h-dvh flex flex-col gap-12 md:gap-6 py-40 items-center justify-center">
      <img src="./testimonials/testimonials-hero.jpg" alt="" className="absolute w-full h-full object-cover select-none brightness-50" />


      <div className="z-10 text-center">
        <h1 className="font-imperial-script text-2-xl">Page not found.</h1>
        <Link href="/" className="transition-colors hover:text-accent hover:underline">Back to Site</Link>
      </div>
    </section>
  );
}
