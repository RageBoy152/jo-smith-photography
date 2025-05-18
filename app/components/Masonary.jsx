// components
import Image from "next/image";


export default function Masonary({ images }) {

  // init cols array
  const cols = Array.from({ length: 4 }, () => []);

  // for each image, sort into 4 even cols
  images.forEach((img, i) => { cols[i % 4].push(img); });



  return (
    <div className="w-11/12 mx-auto py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">

      {cols.map((col, colI) => (

        <div key={colI} className="flex flex-col gap-4">
          {col.map((img, imgI) => {

            // alternate aspect ratio for each img
            const aspectRatio = (imgI + colI) % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]";

            return (
              <div key={img.id} className={`overflow-hidden ${aspectRatio} relative`}>
                <Image placeholder="empty" fill sizes="(min-width:1024px) 25vw, (max-width:1023px) 50vw" src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            );

          })}
        </div>

      ))}

    </div>
  );
}
