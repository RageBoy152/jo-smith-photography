'use client';


export default function SocialLink({ link='#', imagePath, imageAlt, handle }) {
  return (
    <a href={link} className="flex flex-col items-center gap-2 group">
      <img className="w-[60px] transition-transform group-hover:scale-110" src={imagePath} alt={imageAlt} />
      <p>@{handle}</p>
    </a>
  );
}