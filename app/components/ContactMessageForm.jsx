'use client';

// components
import FloatingLabelInput from "./FloatingLabelInput";


export default function ContactMessageForm({ onHero }) {
  return (
    <form action="">
      <div className="flex flex-col gap-6">
        <FloatingLabelInput inputLabel="Name" inputType="text" max={50} transparent={onHero} />
        <FloatingLabelInput inputLabel="Email" inputType="email" max={50} transparent={onHero} />
        <FloatingLabelInput inputLabel="Message" inputType="text" autoComplete="off" max={100} transparent={onHero} />
      </div>

      <div className="transition-colors hover:bg-accent-light bg-accent w-full mt-10">
        <input className="w-full px-3 py-4 h-full outline-0 border-0 cursor-pointer" type="submit" value="Send Message" />
      </div>
    </form>
  );
}