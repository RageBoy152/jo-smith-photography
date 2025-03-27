import { Noto_Serif, Imperial_Script } from 'next/font/google';
import "./globals.css";



// fonts
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"]
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial-script",
  weight: ["400"]
});



// metadata
export const metadata = {
  title: "Jo Smith Photography",
  description: "Placeholder description",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-body text-black font-noto scroll-smooth ${notoSerif.variable} ${imperialScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
