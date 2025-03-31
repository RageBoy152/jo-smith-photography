'use client';

import { useEffect, useState } from "react";



export default function Quote({ quote, person, aligned, stacked, stretch }) {
  const [alignmentClasses, setAlignmentClasses] = useState(['text-start', 'ms-auto']);
  

  useEffect(() => {
    setAlignmentClasses(() => {
      let classes = ['text-start', 'ms-auto'];

      if (aligned == 'center') { classes = ['text-center', 'mx-auto']; }
      else if (aligned == 'right') { classes = ['text-end', 'me-auto']; }

      return classes;
    });
  }, [aligned]);


  return (
    <div className={`flex flex-col justify-center leading-loose ${alignmentClasses[0]} ${stacked ? 'md:mt-40' : ''} ${stretch ? 'w-full' : 'w-full md:w-2/6'}`}>
      <p><span className="relative"><span className="opacity-50 text-2-xl absolute -start-5">“</span></span> {quote} <span className="relative"><span className="opacity-50 text-2-xl absolute start-1">”</span></span></p>
      <p className={`${alignmentClasses[1]} italic opacity-75 text-sm mt-2`}>{person}</p>
    </div>
  );
}