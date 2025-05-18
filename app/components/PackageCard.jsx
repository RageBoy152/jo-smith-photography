'use client';


// components
import Image from "next/image";


export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white/75 text-black flex flex-col items-center py-2 px-4 w-full sm:w-1/2 lg:w-[300px] shadow-lg">
      <div className="text-center mt-2 mb-3">
        <h2 className="font-imperial-script text-2-lg">{pkg.name}</h2>
        <p>£{pkg.price}</p>
      </div>
      
      <div className="w-full h-full aspect-[3/2] bg-gray-300 relative">
        <Image placeholder="empty" fill sizes="(min-width:1024px) 30vw, (min-width:640px) 60vw, (max-width: 639px) 80vw" priority className="w-full h-full aspect-[3/2] object-cover text-center text-black/30" src={pkg.thumbnailPath || null} alt={pkg.alt} />
      </div>

      <p className="py-2 text-center">{pkg.description}</p>
    </div>
  );
}