'use client';
import { useState } from "react";



export default function FloatingLabelInput({ inputLabel, inputType='text', autoComplete='on', max=Infinity, transparent=false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');


  function getFocusedClasses(mode) {
    return mode === 1 ? ((focused || value) ? 'pt-6' : '') : ((focused || value) ? 'text-black/60 pt-6 top-[-16px] text-[10px]' : '')
  }


  return (
    <div className={`${transparent ? 'bg-white/50' : 'bg-white'} w-full relative`}>
      <label className={`transition-all select-none absolute px-3 py-4 ${getFocusedClasses(0)}`} htmlFor={inputLabel.toLowerCase()}>{inputLabel}</label>
      <input onInput={(e) => setValue(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={`transition-all w-full px-3 py-4 h-full outline-0 border-0 ${getFocusedClasses(1)}`} maxLength={max} autoComplete={autoComplete} type={inputType} id={inputLabel.toLowerCase()} />
    </div>
  );
}