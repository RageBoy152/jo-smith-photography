'use client';



export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white/75 text-black flex flex-col items-center py-2 px-4 w-full sm:w-1/2 lg:w-[300px] shadow-lg">
      <div className="text-center mt-2 mb-3">
        <h2 className="font-imperial-script text-2-lg">{pkg.name}</h2>
        <p>£{pkg.price}</p>
      </div>
      
      <div className="w-full aspect-[3/2] flex items-center justify-center mx-auto bg-gray-300">
        <img className="w-full h-full object-cover text-center text-black/30" src={pkg.thumbnailPath || null} alt="Package Preview Image" />
      </div>

      <p className="py-2 text-center">{pkg.description}</p>
    </div>
  );
}