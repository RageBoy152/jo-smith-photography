'use client';

import { useEffect, useState } from "react";



export default function CookiesModal() {

  // -1 = unset, 0 = reject, 1 = accept
  const [userCookiesPref, setUserCookiesPref] = useState(-1);
  
  const [modalActive, setModalActive] = useState(false);



  useEffect(() => {

    // get stored pref from localStorage
    const storedPref = localStorage.getItem("josmithphotography.userpref.cookies");
    if (storedPref) setUserCookiesPref(parseInt(storedPref));

  }, []);


  useEffect(() => {

    // save new pref and disable modal
    if (userCookiesPref != -1) {
      localStorage.setItem("josmithphotography.userpref.cookies", userCookiesPref);
      setModalActive(false);
      return;
    }
    

    // show modal after Xms
    const modalShowDelay = setTimeout(() => {
      if (userCookiesPref == -1) setModalActive(true);
    }, 500);

    return () => clearTimeout(modalShowDelay);

  }, [userCookiesPref])
  


  return (
    <section className="cookies-modal z-20 fixed bottom-0 w-full">
      <div className={`transition-all ${modalActive ? "" : "translate-y-200 opacity-0 pointer-events-none"} bg-body shadow-lg w-11/12 lg:w-3/4 mb-5 px-10 lg:px-6 py-5 mx-auto flex flex-col items-center lg:items-start text-center lg:text-start gap-6`}>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h5 className="text-base">We respect your privacy</h5>
            <h3 className="text-2-lg font-[500]">Cookies notice</h3>
          </div>

          <p className="mt-2">This website uses cookies to help us improve and optimize the browsing experience on our site.</p>
        </div>

        <div className="flex gap-4 w-full flex-col sm:flex-row items-center modal-buttons">
          <button onClick={() => setUserCookiesPref(1)} className="w-full sm:w-1/2 lg:w-auto transition-colors border border-accent hover:bg-accent-light bg-accent lg:px-7 py-4 h-fit outline-0 cursor-pointer">Yes, I accept</button>
          <button onClick={() => setUserCookiesPref(0)} className="w-full sm:w-1/2 lg:w-auto transition-colors border border-black hover:bg-black hover:text-white lg:px-7 py-4 h-fit outline-0 cursor-pointer">Reject cookies</button>
        </div>
      </div>
    </section>
  );
}